/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

function redirect(url: URL, status = 308): Response {
  return new Response(null, {
    status,
    headers: {
      Location: url.toString(),
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function withSecurityHeaders(response: Response, requestUrl: URL): Response {
  const headers = new Headers(response.headers);
  if (requestUrl.protocol === "https:") {
    headers.set("Strict-Transport-Security", "max-age=31536000");
  }
  if (!headers.has("Content-Security-Policy")) {
    headers.set("Content-Security-Policy", "base-uri 'self'; frame-ancestors 'none'; object-src 'none'");
  }
  if (!headers.has("Permissions-Policy")) {
    headers.set("Permissions-Policy", "camera=(), geolocation=(), microphone=()");
  }
  if (!headers.has("Referrer-Policy")) {
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  }
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    const isCanonicalHost = url.hostname === "shrpware.com" || url.hostname === "www.shrpware.com";
    if (isCanonicalHost && (url.protocol === "http:" || url.hostname === "www.shrpware.com")) {
      url.protocol = "https:";
      if (url.hostname === "www.shrpware.com") url.hostname = "shrpware.com";
      return redirect(url);
    }

    if (url.pathname === "/deltatxt") {
      url.pathname = "/apps/deltatxt";
      return redirect(url);
    }

    // App Store Connect has this legacy URL on file for the live WavePlume app.
    // Keep it working even though the canonical policy moved into the app router.
    if (url.pathname === "/privacy.html") {
      return withSecurityHeaders(Response.redirect(new URL("/apps/waveplume/privacy", request.url), 301), url);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      const response = await handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
      return withSecurityHeaders(response, url);
    }

    return withSecurityHeaders(await handler.fetch(request, env, ctx), url);
  },
};

export default worker;
