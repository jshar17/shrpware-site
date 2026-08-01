type BrandProps = {
  href?: string;
};

export function Brand({ href = "/" }: BrandProps) {
  return (
    <a className="brand" href={href} aria-label="ShrpWare home">
      <img src="/brand/shrpware-wordmark.svg" alt="" />
    </a>
  );
}
