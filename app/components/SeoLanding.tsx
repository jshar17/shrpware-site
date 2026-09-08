import type { ReactNode } from "react";
import { SafeLink as Link } from "./SafeLink";
import { PageShell } from "./PageShell";

export function SeoLanding({
  title,
  intro,
  app,
  appHref,
  cta,
  image,
  imageAlt,
  children,
}: {
  title: string;
  intro: string;
  app: string;
  appHref: string;
  cta: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  const accent = app === "DeltaTxt" ? "deltatxt" : "waveplume";
  return <PageShell accent={accent}>
    <section className="landing-hero wrap">
      <div><h1>{title}</h1><p>{intro}</p><Link className="button button-primary" href={appHref}>{cta} <span>↗</span></Link></div>
      <div className="landing-hero-art"><img src={image} alt={imageAlt} /></div>
    </section>
    <article className="landing-body wrap" data-arrival>{children}</article>
    <section className="closing-cta wrap" data-arrival><h2>Use {app} for this workflow.</h2><Link className="button button-primary" href={appHref}>{cta}</Link></section>
  </PageShell>;
}
