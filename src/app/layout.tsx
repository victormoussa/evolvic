import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({
  variable: "--font-sans-body",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evolvic.com"),
  title: {
    default: "Evolvic — Helping organizations move to the cloud",
    template: "%s | Evolvic",
  },
  description:
    "Evolvic helps organizations move to the cloud to become more agile, connected, and efficient through secure, end-to-end digital transformation services.",
  openGraph: {
    siteName: "Evolvic",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
