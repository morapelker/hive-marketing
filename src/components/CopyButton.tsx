"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="outline"
      onClick={handleCopy}
      className="bg-surface-container-highest hover:bg-surface-container-high text-on-surface rounded-lg transition-all active:scale-90 gap-2 shrink-0 border-outline-variant/20 hover:text-on-surface"
    >
      <span className="material-symbols-outlined">
        {copied ? "check" : "content_copy"}
      </span>
      <span className="text-xs font-label">{copied ? "Copied!" : "Copy"}</span>
    </Button>
  );
}
