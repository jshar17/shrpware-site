import type { ReactNode } from "react";
import { SafeLink as Link } from "./SafeLink";
import { LandingMotion } from "./LandingMotion";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export type Accent = "waveplume" | "deltatxt";

export function PageShell({ children, accent }: { children: ReactNode; accent?: Accent }) {
  return (
    <main className="site-shell" data-accent={accent}>
      <LandingMotion>
        <SiteHeader />
        {children}
        <SiteFooter />
      </LandingMotion>
    </main>
  );
}

export function ArticleHero({ title, intro }: { title: string; intro: string }) {
  return (
    <header className="article-hero wrap">
      <h1>{title}</h1>
      <p>{intro}</p>
    </header>
  );
}

export function BackToApp({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="text-link" href={href}>← {children}</Link>;
}
