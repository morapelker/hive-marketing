import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/CopyButton";
import { VideoModal } from "@/components/VideoModal";
import {
  getLatestRelease,
  detectPlatform,
  getAssetForPlatform,
  getPlatformLabel,
  hasAssetsForPlatform,
} from "@/lib/github";
import hiveIcon from "./icon.png";

const BREW_COMMAND = "brew tap morapelker/hive && brew install --cask hive";

export default async function Home() {
  const [release, requestHeaders] = await Promise.all([
    getLatestRelease(),
    headers(),
  ]);
  const ua = requestHeaders.get("user-agent") ?? "";
  const platform = detectPlatform(ua);
  const asset = getAssetForPlatform(release.assets, platform);
  const platformLabel = getPlatformLabel(platform);
  const downloadHref = asset?.url ?? release.releaseUrl;
  const macAsset = getAssetForPlatform(release.assets, "macos-arm");
  const winAsset = getAssetForPlatform(release.assets, "windows");
  const linuxAsset = getAssetForPlatform(release.assets, "linux");
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Image
              alt="Hive"
              src={hiveIcon}
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-xl font-bold font-headline tracking-tight text-on-surface">
              Hive
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="text-[#bcb0ab] hover:text-[#e5e2e1] transition-colors font-headline tracking-tight"
              href="https://github.com/morapelker/hive"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <Link
              className="text-[#bcb0ab] hover:text-[#e5e2e1] transition-colors font-headline tracking-tight"
              href="/docs"
            >
              Docs
            </Link>
            <Link
              className="text-[#bcb0ab] hover:text-[#e5e2e1] transition-colors font-headline tracking-tight"
              href="/blog"
            >
              Blog
            </Link>
          </div>
          <a href={downloadHref}>
            <Button className="px-6 py-2 h-auto rounded-xl font-bold font-label text-base hover:scale-105 active:scale-95 transition-all">
              Download
            </Button>
          </a>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex flex-col items-center justify-center px-6 overflow-hidden hero-gradient">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-container/20 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-label font-medium tracking-wider text-on-surface-variant">
                V{release.version} STABLE RELEASE
              </span>
            </div>

            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              The Command Center <br />
              <span className="text-primary italic">
                for AI Coding Agents
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-12">
              Stop juggling terminal tabs. Orchestrate your AI coding agents
              from one window. A unified interface for Claude Code, Codex,
              OpenCode, and local LLMs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={downloadHref}>
                <Button className="w-full sm:w-auto h-auto px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all gap-3">
                  <span className="material-symbols-outlined">download</span>
                  Download for {platformLabel} (v{release.version})
                </Button>
              </a>
              <a
                href="https://github.com/morapelker/hive"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-auto px-8 py-4 rounded-xl font-bold text-lg transition-all gap-3 bg-surface-container-high border-outline-variant/20 text-on-surface hover:bg-surface-container-highest hover:text-on-surface"
                >
                  <span className="material-symbols-outlined">star</span>
                  Star on GitHub
                </Button>
              </a>
            </div>
          </div>

          {/* Dashboard Mockup Preview */}
          <VideoModal videoSrc="/hive-full-demo.mp4">
            <div className="mt-24 w-full max-w-6xl mx-auto px-4 [perspective:1000px] cursor-pointer group/preview">
              <div className="relative rounded-t-2xl border-x border-t border-outline-variant/30 bg-surface-container-low p-2 shadow-2xl overflow-hidden group-hover/preview:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border-b border-outline-variant/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-error/40" />
                    <div className="w-3 h-3 rounded-full bg-primary-fixed-dim/40" />
                    <div className="w-3 h-3 rounded-full bg-primary/40" />
                  </div>
                  <div className="mx-auto text-[10px] font-label text-on-surface-variant opacity-50 uppercase tracking-[0.2em]">
                    Hive Orchestrator — Agent Session: Main
                  </div>
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-b-lg opacity-90 brightness-75"
                >
                  <source src="/hive-full-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </VideoModal>
        </section>

        {/* Bento Grid Feature Section */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Feature 1: All your agents in one sidebar */}
            <div className="md:col-span-7 group bg-surface-container-low rounded-2xl overflow-hidden flex flex-col border border-transparent hover:border-primary/20 transition-all">
              <div className="p-10 flex-1">
                <div className="inline-block p-3 rounded-xl bg-primary/10 text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">
                    view_sidebar
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-4">
                  All your agents in one sidebar
                </h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md">
                  Run Claude Code, OpenCode, and Codex sessions across multiple
                  projects simultaneously. See every agent&apos;s live token
                  usage and status at a glance without switching apps.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-6 mt-auto border-t border-outline-variant/10 overflow-hidden">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-high border-l-2 border-primary">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">
                        robot_2
                      </span>
                      <span className="font-label text-sm">
                        Claude Code - core-refactor
                      </span>
                    </div>
                    <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">
                      RUNNING
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-high opacity-50">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined">code</span>
                      <span className="font-label text-sm">
                        OpenCode - api-layer
                      </span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded">
                      IDLE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Isolated branches by default */}
            <div className="md:col-span-5 group bg-surface-container-low rounded-2xl overflow-hidden flex flex-col border border-transparent hover:border-primary/20 transition-all">
              <div className="p-10 flex-1">
                <div className="inline-block p-3 rounded-xl bg-primary/10 text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">
                    account_tree
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-4">
                  Isolated branches by default
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Each agent runs on its own git worktree branch. No conflicts,
                  no messy stashing. Merge only when you&apos;re satisfied with
                  the results.
                </p>
              </div>
              <div className="p-8 flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-[200px] flex items-center justify-center">
                  <div className="absolute w-full h-full border-2 border-dashed border-outline-variant/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <span className="material-symbols-outlined text-6xl text-primary">
                    rebase
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 3: Connections: cross-repo AI context */}
            <div className="md:col-span-12 group bg-surface-container-low rounded-2xl overflow-hidden border border-transparent hover:border-primary/20 transition-all">
              <div className="flex flex-col md:flex-row items-center">
                <div className="p-10 md:w-1/2">
                  <div className="inline-block p-3 rounded-xl bg-primary/10 text-primary mb-6">
                    <span className="material-symbols-outlined text-3xl">
                      hub
                    </span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold mb-4">
                    Connections: cross-repo AI context
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    Link multiple repositories together so a single agent
                    session sees your entire stack. Let the AI understand how
                    your frontend components interact with your backend API.
                  </p>
                  <ul className="mt-8 space-y-3">
                    <li className="flex items-center gap-3 text-on-surface">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Global type definitions awareness</span>
                    </li>
                    <li className="flex items-center gap-3 text-on-surface">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Shared environment variable context</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 p-10 bg-surface-container-lowest/50 h-full self-stretch flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-panel p-4 rounded-xl border border-outline-variant/20 flex flex-col gap-2">
                      <span className="text-[10px] font-label text-primary uppercase">
                        Repo A
                      </span>
                      <span className="font-medium">frontend-main</span>
                    </div>
                    <div className="glass-panel p-4 rounded-xl border border-outline-variant/20 flex flex-col gap-2">
                      <span className="text-[10px] font-label text-primary uppercase">
                        Repo B
                      </span>
                      <span className="font-medium">api-service</span>
                    </div>
                    <div className="glass-panel p-4 rounded-xl border border-outline-variant/20 flex flex-col gap-2">
                      <span className="text-[10px] font-label text-primary uppercase">
                        Repo C
                      </span>
                      <span className="font-medium">shared-types</span>
                    </div>
                    <div className="glass-panel p-4 rounded-xl border border-outline-variant/20 flex flex-col gap-2 bg-primary/5 border-primary/20">
                      <span className="text-[10px] font-label text-primary uppercase">
                        Active Session
                      </span>
                      <span className="font-medium">Master Agent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Install Section */}
        <section className="py-32 px-6 bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-4xl font-bold mb-6">
              Install via Homebrew
            </h2>
            <p className="text-on-surface-variant mb-12">
              One command to start orchestrating your autonomous workflow.
            </p>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary-container/50 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              <div className="relative bg-surface p-6 md:p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-outline-variant/20">
                <code className="font-mono text-primary text-lg md:text-xl selection:bg-primary/20 text-left">
                  {BREW_COMMAND}
                </code>
                <CopyButton text={BREW_COMMAND} />
              </div>
            </div>
            <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <a href={macAsset?.url ?? release.releaseUrl} className="font-headline text-2xl font-bold tracking-tighter hover:underline">
                macOS
              </a>
              <a href={winAsset?.url ?? release.releaseUrl} className="font-headline text-2xl font-bold tracking-tighter hover:underline">
                Windows{!hasAssetsForPlatform(release.assets, "windows") && " (Soon)"}
              </a>
              <a href={linuxAsset?.url ?? release.releaseUrl} className="font-headline text-2xl font-bold tracking-tighter hover:underline">
                Linux
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
