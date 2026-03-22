import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-6 px-6">
      <div className="inline-block p-4 rounded-xl bg-primary/10 text-primary">
        <span className="material-symbols-outlined text-5xl">description</span>
      </div>
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface text-center">
        Documentation
      </h1>
      <p className="text-on-surface-variant text-lg text-center max-w-md">
        Documentation is coming soon. Check back later for guides, API
        references, and tutorials.
      </p>
      <Link
        href="/"
        className="mt-4 text-primary font-label font-bold hover:underline flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Back to Home
      </Link>
    </div>
  );
}
