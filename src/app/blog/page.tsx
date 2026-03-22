import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-6 px-6">
      <div className="inline-block p-4 rounded-xl bg-primary/10 text-primary">
        <span className="material-symbols-outlined text-5xl">article</span>
      </div>
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface text-center">
        Blog
      </h1>
      <p className="text-on-surface-variant text-lg text-center max-w-md">
        Stories, updates, and insights from the Hive team. Coming soon.
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
