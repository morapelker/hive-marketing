export function WindowChrome({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-outline-variant/30 bg-surface-container-low overflow-hidden shadow-2xl ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border-b border-outline-variant/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-error/40" />
          <div className="w-3 h-3 rounded-full bg-primary-fixed-dim/40" />
          <div className="w-3 h-3 rounded-full bg-primary/40" />
        </div>
        <div className="mx-auto text-[10px] font-label text-on-surface-variant opacity-50 uppercase tracking-[0.2em]">
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}
