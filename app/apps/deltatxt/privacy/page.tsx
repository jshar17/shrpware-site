import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "../../../Brand";

export const metadata: Metadata = {
  title: "DeltaTxt™ Privacy Notice | ShrpWare",
  description: "How the DeltaTxt freeware editor handles files, local preferences, recovery data, and script execution.",
  alternates: { canonical: "/apps/deltatxt/privacy" },
};

export default function DeltaTxtPrivacy() {
  return (
    <main className="legal-page delta-legal">
      <header className="legal-header"><Brand /><nav><a href="/apps/deltatxt">DeltaTxt</a><Link href="/">Store</Link></nav></header>
      <article className="legal-content">
        <p className="product-overline">DELTATXT / PRIVACY</p><h1>Privacy notice</h1><p className="effective-date">Effective August 12, 2026</p>
        <p className="legal-lede">DeltaTxt is designed as a local desktop application. It requires no account and includes no telemetry, analytics, advertising, or automatic crash-report submission.</p>
        <h2>Data handling</h2><ul><li>Files remain on your computer unless you save them to synchronized or network-backed storage.</li><li>Preferences and Python run settings are stored in the current user’s local application-data folder.</li><li>Unsaved-tab recovery snapshots may be stored locally after an unclean exit and are removed after a clean exit or when recovery is declined.</li><li>Search, replacement, comparison, merge, and debugging operations run locally.</li></ul>
        <h2>Script execution</h2><p>Scripts launched through DeltaTxt run with your operating-system permissions. A script may access files, networks, credentials, or other resources according to its own code and permissions. Only run code you trust.</p>
        <h2>Third-party services</h2><p>The application does not contact a DeltaTxt-operated service. Operating-system features, package managers, interpreters, synchronized folders, or user-run scripts may contact their own services under separate terms.</p>
        <h2>Changes</h2><p>Material changes to this notice will be recorded with the product. Review this page again if a future version adds updates, crash reporting, cloud services, or accounts.</p>
      </article>
      <footer className="product-footer"><a href="/apps/deltatxt">← DeltaTxt</a><span>© 2026 ShrpWare</span></footer>
    </main>
  );
}
