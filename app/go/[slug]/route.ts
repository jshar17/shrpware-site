import { outboundDestinations, releaseStatus } from "@/app/lib/site";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const destination = outboundDestinations[slug];
  const releaseBlocked =
    (slug === "waveplume-trial" && !releaseStatus.waveplumeTrialReady) ||
    (slug === "deltatxt-store" && !releaseStatus.deltaStoreReady);

  if (!destination || releaseBlocked) {
    return new Response("Not found", { status: 404 });
  }

  const target = new URL(destination, request.url);
  return new Response(null, {
    status: 307,
    headers: {
      Location: target.toString(),
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}
