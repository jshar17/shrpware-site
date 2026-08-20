import type { ReactNode } from "react";
import { SafeLink as Link } from "./SafeLink";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="site-shell">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function ArticleHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="article-hero wrap">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h1>{title}</h1>
      <p>{intro}</p>
    </header>
  );
}

export function BackToApp({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="text-link" href={href}>← {children}</Link>;
}
