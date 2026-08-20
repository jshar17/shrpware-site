import { SafeLink as Link } from "./SafeLink";

export function SiteHeader() {
  return (
    <header className="site-header wrap">
      <Link href="/" aria-label="ShrpWare home" className="brand-link">
        <img src="/brand/shrpware-wordmark.svg" alt="ShrpWare" />
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#apps">Apps</Link>
        <Link href="/#standard">Principles</Link>
        <Link href="/press">Press kit</Link>
        <Link href="mailto:support@shrpware.com">Support</Link>
      </nav>
    </header>
  );
}
