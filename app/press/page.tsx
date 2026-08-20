import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { ArticleHero, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "Press kit", description: "Approved descriptions, product facts, screenshots, icons, and contact details for ShrpWare, WavePlume, and DeltaTxt.", alternates: { canonical: "/press" } };

export default function PressPage() {
  return <PageShell><ArticleHero eyebrow="ShrpWare / Press kit" title="ShrpWare press kit." intro="Product descriptions, facts, screenshots, icons, and contact information for coverage and app listings." />
    <article className="article-body wrap press-body">
      <h2>ShrpWare</h2><p><strong>Boilerplate:</strong> ShrpWare makes WavePlume, a meeting recorder and transcriber, and DeltaTxt, a Windows text editor.</p>
      <h2>WavePlume</h2><p><strong>One line:</strong> WavePlume records and transcribes meetings locally with Whisper—without a meeting bot, cloud processing, account, or subscription.</p><ul><li>macOS and Windows</li><li>$14.99 one-time purchase</li><li>14-day standalone Windows trial</li><li>Local audio recording and transcription</li></ul>
      <div className="press-assets"><a href="/apps/waveplume/app-assets/png/waveplume-128.png" download>Download icon</a><a href="/apps/waveplume/hero-wave.webp" download>Download product image</a><Link href="/apps/waveplume">Product page</Link></div>
      <h2>DeltaTxt</h2><p><strong>One line:</strong> DeltaTxt is a free native Windows workbench for large logs, text comparison and merge, workspace search, and Python-powered workflows.</p><ul><li>Windows 10 and 11</li><li>Freeware</li><li>No account, telemetry, advertising, or subscription</li></ul>
      <div className="press-assets"><a href="/apps/deltatxt/icon.png" download>Download icon</a><a href="/apps/deltatxt/hero-workbench.webp" download>Download product image</a><Link href="/apps/deltatxt">Product page</Link></div>
      <h2>Contact</h2><p>Product and press inquiries: <a href="mailto:support@shrpware.com">support@shrpware.com</a>.</p>
    </article>
  </PageShell>;
}
