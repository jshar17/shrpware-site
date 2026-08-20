import type { Metadata } from "next";
import { SafeLink as Link } from "@/app/components/SafeLink";
import { ArticleHero, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "Support", description: "Get help with WavePlume or DeltaTxt, or reach ShrpWare by email.", alternates: { canonical: "/support" } };

export default function SupportPage() {
  return <PageShell><ArticleHero eyebrow="ShrpWare / Support" title="Support." intro="Pick the product you need help with, or email us directly." />
    <article className="article-body wrap">
      <div className="link-card-grid">
        <Link href="/apps/waveplume/support"><span>WavePlume</span><strong>Audio, transcripts, models, and licensing</strong><b>→</b></Link>
        <Link href="/apps/deltatxt/support"><span>DeltaTxt</span><strong>Installation, large files, search, and scripts</strong><b>→</b></Link>
      </div>
      <h2>Email</h2><p>Write to <a href="mailto:support@shrpware.com">support@shrpware.com</a>. Include your operating system, the product version, and what happened, so the first reply can be useful. Do not attach private recordings or confidential text unless it has been requested and is safe to share.</p>
    </article>
  </PageShell>;
}
