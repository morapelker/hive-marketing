"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-surface-container-highest hover:bg-surface-container-high text-on-surface p-3 rounded-lg transition-all active:scale-90 flex items-center gap-2 group/copy shrink-0"
    >
      <span className="material-symbols-outlined">
        {copied ? "check" : "content_copy"}
      </span>
      <span className="text-xs font-label">{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}
