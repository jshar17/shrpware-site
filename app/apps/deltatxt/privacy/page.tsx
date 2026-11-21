import type { Metadata } from "next";
import { ArticleHero, BackToApp, PageShell } from "@/app/components/PageShell";
import { site } from "@/app/lib/site";

export const metadata: Metadata = { title: "DeltaTxt privacy policy", description: "How DeltaTxt handles local files, preferences, recovery data, and scripts run by the Windows edition.", alternates: { canonical: "/apps/deltatxt/privacy" } };

export default function DeltaTxtPrivacy() {
  return <PageShell accent="deltatxt"><ArticleHero title="How DeltaTxt handles your data." intro="Effective August 28, 2026. DeltaTxt is a local desktop app with no account, telemetry, analytics, advertising, or automatic crash submission." />
    <article className="article-body wrap policy-copy"><BackToApp href="/apps/deltatxt">Back to DeltaTxt</BackToApp>
      <p>DeltaTxt is provided by {site.legalName}, a Texas limited liability company. {site.legalName} operates this site and can be reached at <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      <h2>Files and preferences</h2><p>DeltaTxt opens and changes the files you select. App preferences, recent-file information, and recovery snapshots are stored locally on your device. Recovery snapshots exist only to restore work after an unclean exit, and are removed after a clean one.</p>
      <h2>Operations stay local</h2><p>Editing, search, comparison, merge, and other built-in text operations run on your computer. {site.legalName} does not operate a service that receives the contents of your files.</p>
      <h2>Scripts and interpreters (Windows edition)</h2><p>The Windows edition can run scripts and external interpreters. When you run one, it executes with your operating-system permissions, and a script, interpreter, package, or command you select may read local data or contact its own services. Review third-party code before running it. The Mac App Store edition does not run scripts or interpreters at all, so none of this applies to it.</p>
      <h2>Sync and third-party tools</h2><p>If you keep files in OneDrive, Dropbox, Git hosting, or another synced location, that provider may process the files under its own terms. DeltaTxt does not control those services.</p>
      <h2>Questions and changes</h2><p>Questions for {site.legalName} can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>. Material policy changes will be posted here with a new effective date.</p>
    </article>
  </PageShell>;
}
