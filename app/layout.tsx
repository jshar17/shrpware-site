import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrpware.com"),
  applicationName: "ShrpWare",
  title: "ShrpWare — Private, local-first desktop apps",
  description:
    "ShrpWare builds focused local-first desktop software, including WavePlume for private meeting transcription and DeltaTxt, a free native text editor and diff tool.",
  keywords: [
    "ShrpWare",
    "WavePlume",
    "private meeting recorder",
    "offline transcription",
    "DeltaTxt",
    "free Windows text editor",
    "file comparison tool",
    "Windows desktop apps",
    "local-first software",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: "ShrpWare", url: "https://shrpware.com" }],
  creator: "ShrpWare",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ShrpWare — Private, local-first desktop apps",
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
    title: "ShrpWare — Private, local-first desktop apps",
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
