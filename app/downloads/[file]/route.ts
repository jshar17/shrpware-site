/**
 * Serves the DeltaTxt installers from shrpware.com itself.
 *
 * The files live in R2 and are reachable directly at their pub-*.r2.dev address,
 * but corporate web filters routinely block r2.dev wholesale as a file-sharing
 * domain — putting the download out of reach of exactly the managed environments
 * the corporate build exists for. Fetching upstream from the worker keeps the
 * browser talking only to shrpware.com, which those filters already allow.
 *
 * The allowlist is load-bearing, not decoration. Without it this route proxies
 * arbitrary keys out of the bucket to anyone who guesses a path.
 */

const BUCKET_ORIGIN =
  "https://pub-6e5446faa8bf4deb83894211caf0c1a2.r2.dev/deltatxt";

const DOWNLOADS = new Set([
  "DeltaTxt-0.3.1-setup.exe",
  "DeltaTxt-0.3.1-setup-corporate.exe",
]);

type RouteContext = { params: Promise<{ file: string }> };

async function serve(file: string, method: "GET" | "HEAD"): Promise<Response> {
  if (!DOWNLOADS.has(file)) {
    return new Response("Not found", { status: 404 });
  }

  const upstream = await fetch(`${BUCKET_ORIGIN}/${file}`, { method });
  if (!upstream.ok) {
    return new Response("Download unavailable", { status: 502 });
  }

  const headers = new Headers();
  headers.set("content-type", "application/vnd.microsoft.portable-executable");
  headers.set("content-disposition", `attachment; filename="${file}"`);
  headers.set("cache-control", "public, max-age=3600");

  // Pass the length through so browsers can show real download progress.
  const length = upstream.headers.get("content-length");
  if (length) {
    headers.set("content-length", length);
  }

  // Streamed, not buffered: these are ~70 MB.
  return new Response(method === "HEAD" ? null : upstream.body, {
    status: 200,
    headers,
  });
}

export async function GET(
  _request: Request,
  { params }: RouteContext,
): Promise<Response> {
  const { file } = await params;
  return serve(file, "GET");
}

export async function HEAD(
  _request: Request,
  { params }: RouteContext,
): Promise<Response> {
  const { file } = await params;
  return serve(file, "HEAD");
}
