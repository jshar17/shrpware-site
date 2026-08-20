import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shrpware.com"),
  title: {
    default: "ShrpWare — Apps with an edge",
    template: "%s | ShrpWare",
  },
  description:
    "WavePlume records and transcribes meetings. DeltaTxt edits, compares, searches, and automates text.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "ShrpWare",
    locale: "en_US",
    images: [{ url: "/og-v5.png", width: 1728, height: 907, alt: "ShrpWare wordmark with waveform and file comparison graphics" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-v5.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
