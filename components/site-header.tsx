"use client";

import { useEffect, useRef, useState } from "react";
import { availabilityLabel, navLinks, siteConfig } from "@/lib/site";
import { Close, Menu } from "@/components/icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("top");

  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? Math.min(1, doc.scrollTop / max) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-background/85 shadow-[0_10px_30px_-24px_rgba(23,22,28,0.4)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div
        ref={progressRef}
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left bg-accent"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label={`${siteConfig.name} — back to top`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-sm font-semibold text-accent-ink shadow-sm transition-colors group-hover:bg-accent-strong sm:h-9 sm:w-9">
            V
          </span>
          <span className="text-[0.95rem] font-semibold tracking-tight text-foreground">
            {siteConfig.name}
            <span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                data-active={active}
                aria-current={active ? "location" : undefined}
                className="nav-link text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-11 items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink shadow-sm transition-colors hover:bg-accent-strong sm:inline-flex"
          >
            Let&apos;s Talk
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="-mr-1 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-foreground transition-colors hover:bg-surface-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? (
              <Close width={20} height={20} />
            ) : (
              <Menu width={20} height={20} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-background/95 shadow-xl backdrop-blur-xl md:hidden"
      >
        <nav
          className="mx-auto flex w-full max-w-6xl flex-col px-5 py-4 sm:px-8"
          aria-label="Mobile"
        >
          {navLinks.map((link) => {
            const active = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                data-active={active}
                aria-current={active ? "location" : undefined}
                className={`flex min-h-12 items-center justify-between border-b border-line-soft py-3.5 text-base font-medium transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {active && (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-ink shadow-sm transition-colors hover:bg-accent-strong"
          >
            Let&apos;s Talk
          </a>

          <p className="mt-4 flex items-center justify-center gap-2 pb-2 text-xs text-faint">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                siteConfig.availability.open ? "bg-emerald-500" : "bg-amber-500"
              }`}
              aria-hidden="true"
            />
            {availabilityLabel}
          </p>
        </nav>
      </div>
    </header>
  );
}
