import type { ReactNode } from "react";
import { SafeLink as Link } from "./SafeLink";
import { PageShell } from "./PageShell";

export function SeoLanding({
  eyebrow,
  title,
  intro,
  app,
  appHref,
  cta,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  app: string;
  appHref: string;
  cta: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return <PageShell>
    <section className="landing-hero wrap">
      <div><p className="eyebrow"><span />{eyebrow}</p><h1>{title}</h1><p>{intro}</p><Link className="button button-primary" href={appHref}>{cta} <span>→</span></Link></div>
      <img src={image} alt={imageAlt} />
    </section>
    <article className="landing-body wrap">{children}</article>
    <section className="closing-cta wrap"><p className="section-number">AVAILABLE IN {app.toUpperCase()}</p><h2>Use {app} for this workflow.</h2><Link className="button button-primary" href={appHref}>{cta}</Link></section>
  </PageShell>;
}
