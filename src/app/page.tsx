import Image from "next/image";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida/ADBb0ui8PNhhEh9et1rrJ4xE7DgoC6Kq6f_RgdrLD2dkzuavkruD_wweP9Ju-0pKw70b66s7WvUdn9GgXrOSB6xsH9IUndXlTs6es_3ep7kyvT1KL9-BCsUbFGI7sRDQUixUOkapLHRkUs0Wv4Qls60KQ0iCObtFkXgMb7pgqjWJDWebZd3D8T_C3gBckzj8WlCKyXHsCf0vGn_Po1EfEhPD5Em4KYbrlq2TaKeSHSgHnEG9KtmOZg8NRdQWtqVH3yw9Wnhn2iOscCmt1w";

const PREVIEW_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDQBeO97d0vSRcxKCCn-KhoAWRiCilKWe1wIp8KgehvERWSa4xz_jvAuc5_Yqk20nRIZv8RtbkDLP2-Exp8HiSXOm-KQf3L8oVa-3v3zfs-gAPYV-Qykov3T1oYwZrZDd7eNy-OXD7IMriWBHorAUb3HoQI7JHeCl6dThTZVPv8PWgMQm9Thnk903QYGzE1msaUCS-VpaS0WUvSRy4-y8jZO-8OmHnessQYfnsGerJDl35o756pQEao4CkPj_MSE65Tpd95Ye1AZPk";

const BREW_COMMAND = "brew tap morapelker/hive && brew install --cask hive";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <Image
              alt="Hive Logo"
              className="h-8 w-auto"
              src={LOGO_URL}
              width={120}
              height={32}
              unoptimized
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="text-[#6bfb9a] font-bold border-b-2 border-[#6bfb9a] pb-1 font-headline tracking-tight"
              href="#"
            >
              GitHub
            </a>
            <Link
              className="text-[#bccabb] hover:text-[#e5e2e1] transition-colors font-headline tracking-tight"
              href="/docs"
            >
              Docs
            </Link>
            <Link
              className="text-[#bccabb] hover:text-[#e5e2e1] transition-colors font-headline tracking-tight"
              href="/blog"
            >
              Blog
            </Link>
          </div>
          <button className="text-on-primary px-6 py-2 rounded-xl font-bold font-label hover:scale-105 active:scale-95 transition-all bg-primary">
            Download
          </button>
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
                V1.0.4 STABLE RELEASE
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
              from one window. A unified interface for Claude Code, OpenCode,
              and local LLMs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(107,251,154,0.3)] transition-all group bg-primary">
                <span className="material-symbols-outlined">download</span>
                Download for macOS (v1.0.4)
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-surface-container-high border border-outline-variant/20 text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-all group">
                <span className="material-symbols-outlined">star</span>
                Star on GitHub
              </button>
            </div>
          </div>

          {/* Dashboard Mockup Preview */}
          <div className="mt-24 w-full max-w-6xl mx-auto px-4 [perspective:1000px]">
            <div className="relative rounded-t-2xl border-x border-t border-outline-variant/30 bg-surface-container-low p-2 shadow-2xl overflow-hidden">
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
              <Image
                alt="Hive UI Preview"
                className="w-full h-auto rounded-b-lg opacity-90 brightness-75 grayscale-[0.2]"
                src={PREVIEW_URL}
                width={1200}
                height={675}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>
          </div>
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
              <span className="font-headline text-2xl font-bold tracking-tighter">
                macOS
              </span>
              <span className="font-headline text-2xl font-bold tracking-tighter">
                Linux
              </span>
              <span className="font-headline text-2xl font-bold tracking-tighter">
                Windows (Soon)
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] w-full py-12 px-6 border-t border-[#3d4a3e]/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold text-[#6bfb9a] font-headline">
              <Image
                alt="Hive Logo"
                className="h-6 w-auto mb-2"
                src={LOGO_URL}
                width={90}
                height={24}
                unoptimized
              />
            </div>
            <p className="text-sm text-[#bccabb] font-body leading-relaxed">
              &copy; 2024 Hive Orchestrator. <br />
              Open Source under MIT.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-on-surface font-bold text-sm uppercase tracking-widest font-label mb-2">
              Community
            </h4>
            <a
              className="text-[#bccabb] hover:text-[#6bfb9a] transition-colors text-sm font-body"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-[#bccabb] hover:text-[#6bfb9a] transition-colors text-sm font-body"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-[#bccabb] hover:text-[#6bfb9a] transition-colors text-sm font-body"
              href="#"
            >
              Discord
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-on-surface font-bold text-sm uppercase tracking-widest font-label mb-2">
              Resources
            </h4>
            <Link
              className="text-[#bccabb] hover:text-[#6bfb9a] transition-colors text-sm font-body"
              href="/docs"
            >
              Documentation
            </Link>
            <a
              className="text-[#bccabb] hover:text-[#6bfb9a] transition-colors text-sm font-body"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-[#bccabb] hover:text-[#6bfb9a] transition-colors text-sm font-body"
              href="#"
            >
              API Reference
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-on-surface font-bold text-sm uppercase tracking-widest font-label mb-2">
              Stay Updated
            </h4>
            <div className="flex gap-2">
              <input
                className="bg-surface-container-low border-none rounded-lg text-sm px-4 py-2 w-full focus:ring-1 focus:ring-primary"
                placeholder="email@hive.so"
                type="email"
              />
              <button className="bg-primary text-on-primary-fixed p-2 rounded-lg">
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
