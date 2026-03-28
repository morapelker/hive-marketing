import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "/docs/Docs.html",
      },
      {
        source: "/docs/",
        destination: "/docs/Docs.html",
      },
      {
        source: "/docs/Docs",
        destination: "/docs/Docs.html",
      },
      {
        source: "/docs/GUIDE",
        destination: "/docs/GUIDE.html",
      },
      {
        source: "/docs/FAQ",
        destination: "/docs/FAQ.html",
      },
      {
        source: "/docs/SHORTCUTS",
        destination: "/docs/SHORTCUTS.html",
      },
      {
        source: "/docs/README",
        destination: "/docs/README.html",
      },
      {
        source: "/docs/SUMMARY",
        destination: "/docs/SUMMARY.html",
      },
      {
        source: "/docs/DEPLOY",
        destination: "/docs/DEPLOY.html",
      },
      {
        source: "/docs/session-title-generation",
        destination: "/docs/session-title-generation.html",
      },
      {
        source: "/docs/distribution-audit",
        destination: "/docs/distribution-audit.html",
      },
      {
        source: "/docs/changelog",
        destination: "/docs/changelog/index.html",
      },
      {
        source: "/docs/changelog/",
        destination: "/docs/changelog/index.html",
      },
      {
        source: "/docs/changelog/:slug",
        destination: "/docs/changelog/:slug.html",
      },
    ];
  },
};

export default nextConfig;
