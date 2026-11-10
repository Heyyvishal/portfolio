"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "@/components/icons";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const scheduleReset = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setCopied(false);
      setFailed(false);
    }, 2400);
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (!success) throw new Error("Copy command failed");
      }
      setCopied(true);
      setFailed(false);
    } catch {
      setCopied(false);
      setFailed(true);
    }
    scheduleReset();
  };

  const label = copied ? "Email copied" : failed ? "Copy failed" : "Copy email";

  return (
    <>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-surface-2 active:bg-surface-2"
      >
        {copied ? (
          <Check width={17} height={17} className="text-emerald-600" />
        ) : (
          <Copy width={17} height={17} className="text-muted" />
        )}
        {label}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied
          ? "Email address copied to clipboard."
          : failed
            ? "Could not copy the email address. Please select the address and copy it manually."
            : ""}
      </span>
    </>
  );
}
