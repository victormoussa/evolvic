import type { Metadata, Viewport } from "next";
import { Prompt, Poppins } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildRobotsMetadata, siteUrl } from "@/lib/indexing";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const prompt = Prompt({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Home - Evolvic - Helping organizations move to the cloud",
    template: "%s | Evolvic",
  },
  description:
    "Evolvic helps organizations move to the cloud to become more agile, connected, and efficient through secure, end-to-end digital transformation services.",
  icons: {
    icon: "/favicon.svg",
  },
  robots: buildRobotsMetadata(),
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
      className={`${poppins.variable} ${prompt.variable} h-full antialiased`}
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-clip font-sans">
        <SiteHeader />
        <main className="min-w-0 flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
