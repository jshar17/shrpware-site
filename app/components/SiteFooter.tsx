import { SafeLink as Link } from "./SafeLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <img className="footer-mark" src="/brand/shrpware-wordmark.svg" alt="ShrpWare" />
        </div>
        <div className="footer-links">
          <strong>Apps</strong>
          <Link href="/apps/waveplume">WavePlume</Link>
          <Link href="/apps/deltatxt">DeltaTxt</Link>
        </div>
        <div className="footer-links">
          <strong>Resources</strong>
          <Link href="/press">Press kit</Link>
          <Link href="/apps/waveplume/support">WavePlume support</Link>
          <Link href="/apps/deltatxt/support">DeltaTxt support</Link>
        </div>
        <div className="footer-links">
          <strong>Privacy</strong>
          <Link href="/apps/waveplume/privacy">WavePlume privacy</Link>
          <Link href="/apps/deltatxt/privacy">DeltaTxt privacy</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} ShrpWare</span>
        <a href="mailto:support@shrpware.com">support@shrpware.com</a>
      </div>
    </footer>
  );
}
