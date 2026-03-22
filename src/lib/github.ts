export type Platform = "macos-arm" | "macos-intel" | "windows" | "linux";

export interface PlatformAsset {
  platform: Platform;
  url: string;
  fileName: string;
  size: number;
}

export interface ReleaseInfo {
  version: string;
  releaseUrl: string;
  assets: PlatformAsset[];
}

const GITHUB_REPO = "morapelker/hive";

const FALLBACK_RELEASE: ReleaseInfo = {
  version: "1.0.70",
  releaseUrl: `https://github.com/${GITHUB_REPO}/releases`,
  assets: [],
};

function classifyAsset(
  name: string
): Platform | null {
  // Skip auto-update metadata, blockmaps, and zip archives
  if (
    name.endsWith(".blockmap") ||
    name.endsWith(".yml") ||
    name.endsWith(".zip")
  ) {
    return null;
  }

  // macOS ARM (.dmg with arm64)
  if (name.includes("arm64") && name.endsWith(".dmg")) return "macos-arm";

  // macOS Intel (.dmg without arm64)
  if (name.endsWith(".dmg")) return "macos-intel";

  // Windows installer (match Setup-*.exe to avoid auto-updater executables)
  if (name.includes("-Setup-") && name.endsWith(".exe")) return "windows";

  // Linux
  if (name.endsWith(".AppImage") || name.endsWith(".deb")) return "linux";

  return null;
}

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
      {
        headers,
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      console.error(`GitHub API returned ${res.status}: ${res.statusText}`);
      return FALLBACK_RELEASE;
    }

    const data = await res.json();

    const version = (data.tag_name ?? "").replace(/^v/i, "");
    const releaseUrl =
      data.html_url ?? `https://github.com/${GITHUB_REPO}/releases`;

    const assets: PlatformAsset[] = [];
    for (const asset of data.assets ?? []) {
      const platform = classifyAsset(asset.name);
      if (platform) {
        assets.push({
          platform,
          url: asset.browser_download_url,
          fileName: asset.name,
          size: asset.size,
        });
      }
    }

    return { version, releaseUrl, assets };
  } catch (error) {
    console.error("Failed to fetch GitHub release:", error);
    return FALLBACK_RELEASE;
  }
}

export function detectPlatform(userAgent: string): Platform {
  const ua = userAgent.toLowerCase();
  // Check Mac first — some UA strings contain "win" as a substring in other contexts
  if (ua.includes("mac")) return "macos-arm";
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux")) return "linux";
  // Default to macOS ARM (Apple Silicon majority)
  return "macos-arm";
}

export function getAssetForPlatform(
  assets: PlatformAsset[],
  platform: Platform
): PlatformAsset | undefined {
  const exact = assets.find((a) => a.platform === platform);
  if (exact) return exact;

  // macOS fallback: ARM ↔ Intel (both .dmg files work cross-arch via Rosetta)
  if (platform === "macos-arm") {
    return assets.find((a) => a.platform === "macos-intel");
  }
  if (platform === "macos-intel") {
    return assets.find((a) => a.platform === "macos-arm");
  }

  return undefined;
}

export function getPlatformLabel(platform: Platform): string {
  switch (platform) {
    case "macos-arm":
    case "macos-intel":
      return "macOS";
    case "windows":
      return "Windows";
    case "linux":
      return "Linux";
  }
}

export function hasAssetsForPlatform(
  assets: PlatformAsset[],
  ...platforms: Platform[]
): boolean {
  return assets.some((a) => platforms.includes(a.platform));
}
