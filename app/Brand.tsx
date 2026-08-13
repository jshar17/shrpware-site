type BrandProps = {
  href?: string;
};

export function Brand({ href = "/" }: BrandProps) {
  return (
    <a className="brand" href={href} aria-label="ShrpWare trademark home">
      <img src="/brand/shrpware-wordmark.svg" alt="" />
      <sup className="brand-trademark" aria-hidden="true">™</sup>
    </a>
  );
}
