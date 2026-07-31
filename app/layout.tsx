import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShrpWare — Apps with an edge",
  description:
    "ShrpWare is an independent software studio in Hurst, Texas, building focused apps for Windows, macOS, and mobile.",
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
