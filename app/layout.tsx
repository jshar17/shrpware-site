import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrpware.com"),
  title: "ShrpWare — Apps with an edge",
  description:
    "ShrpWare builds focused desktop software, including WavePlume and DeltaTxt, with local control and less noise.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ShrpWare — Apps with an edge",
    description:
      "Focused desktop software for people who want capable tools, local control, and less noise.",
    url: "https://shrpware.com",
    siteName: "ShrpWare",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ShrpWare, WavePlume, and DeltaTxt",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShrpWare — Apps with an edge",
    description:
      "Focused desktop software for people who want capable tools, local control, and less noise.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
