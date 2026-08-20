import type { Metadata } from "next";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";

export const metadata: Metadata = { title: "DeltaTxt privacy policy", description: "How DeltaTxt handles local files, preferences, recovery data, and user scripts.", alternates: { canonical: "/apps/deltatxt/privacy" } };

export default function DeltaTxtPrivacy() {
  return <PageShell><ArticleHero eyebrow="DeltaTxt / Privacy" title="How DeltaTxt handles your data." intro="Effective August 12, 2026. DeltaTxt is a local desktop app with no account, telemetry, analytics, advertising, or automatic crash submission." />
    <article className="article-body wrap policy-copy"><BackToApp href="/apps/deltatxt">Back to DeltaTxt</BackToApp>
      <h2>Files and preferences</h2><p>DeltaTxt opens and changes the files you select. App preferences, recent-file information, and recovery snapshots are stored locally on your device.</p>
      <h2>Operations stay local</h2><p>Editing, search, comparison, merge, and other built-in text operations run on your computer. ShrpWare does not operate a service that receives the contents of your files.</p>
      <h2>Scripts and interpreters</h2><p>When you run a script or external interpreter, it executes with your operating-system permissions. A script, interpreter, package, or command you select may read local data or contact its own services. Review third-party code before running it.</p>
      <h2>Sync and third-party tools</h2><p>If you keep files in OneDrive, Dropbox, Git hosting, or another synced location, that provider may process the files under its own terms. DeltaTxt does not control those services.</p>
      <h2>Questions and changes</h2><p>Questions can be sent to <a href="mailto:support@shrpware.com">support@shrpware.com</a>. Material policy changes will be posted here with a new effective date.</p>
    </article>
  </PageShell>;
}
