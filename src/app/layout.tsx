import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const SITE_URL = "https://hive-ai.dev";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hive | The AI Coding Agent Orchestrator",
    template: "%s | Hive",
  },
  description:
    "Stop juggling terminal tabs. Orchestrate your AI coding agents from one window. A unified interface for Claude Code, Codex, OpenCode, and local LLMs.",
  keywords: [
    "AI coding agent",
    "Claude Code",
    "Codex",
    "macOS developer tool",
    "AI orchestrator",
    "OpenCode",
    "local LLMs",
    "developer productivity",
    "coding assistant",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hive",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hive",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    license: "MIT",
    downloadUrl: "https://github.com/morapelker/hive/releases",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hive",
    url: SITE_URL,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", spaceGrotesk.variable, inter.variable, "font-sans", geist.variable)}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
