import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-15");
  return [
    {
      url: "https://hive-ai.dev",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://hive-ai.dev/docs",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://hive-ai.dev/docs/README",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://hive-ai.dev/docs/FAQ",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://hive-ai.dev/docs/SHORTCUTS",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://hive-ai.dev/docs/changelog",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
