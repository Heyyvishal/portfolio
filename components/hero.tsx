import {
  availabilityLabel,
  siteConfig,
} from "@/lib/site";
import { ArrowRight, Check, MapPin, Sparkle } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const specialities = [
  "Business websites",
  "Landing pages",
  "Custom web apps",
  "Website redesigns",
];

function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[33rem] px-1 sm:px-4 lg:px-0"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_60%_35%,rgba(59,64,224,0.16),transparent_62%)] blur-2xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-3 top-3 hidden h-28 w-28 sm:block"
        aria-hidden="true"
      >
        <div className="spin-slow h-full w-full rounded-full border border-dashed border-accent/30" />
        <div className="pulse-ring absolute inset-6 rounded-full border border-accent/20" />
      </div>

      <div className="animate-float-slow relative">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-45px_rgba(23,22,28,0.5)]">
          <div className="flex items-center gap-2 border-b border-line-soft bg-surface-2/70 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="ml-2 rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              Portfolio preview
            </span>
            <span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live
            </span>
          </div>

          <div className="p-3 sm:p-4">
            <div className="overflow-hidden rounded-xl border border-line-soft bg-[#fbfaf7]">
              <div className="flex items-center justify-between border-b border-line-soft px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent font-mono text-[10px] font-semibold text-accent-ink">
                    V
                  </span>
                  <span className="text-[11px] font-semibold tracking-tight text-foreground">
                    Vishal<span className="text-accent">.</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="hidden text-[9px] font-medium text-muted min-[360px]:block">
                    Work
                  </span>
                  <span className="hidden text-[9px] font-medium text-muted min-[360px]:block">
                    About
                  </span>
                  <span className="rounded-md bg-foreground px-2 py-1 text-[8px] font-semibold text-background">
                    Let&apos;s talk
                  </span>
                </div>
              </div>

              <div className="px-4 pb-5 pt-5 sm:px-5 sm:pt-6">
                <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-accent">
                  <span className="h-px w-4 bg-accent/50" aria-hidden="true" />
                  Independent developer
                </span>
                <p className="mt-3 max-w-[18rem] text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[1.65rem]">
                  Websites that work as{" "}
                  <span className="font-serif italic font-normal text-accent">
                    hard
                  </span>{" "}
                  as you do.
                </p>
                <div className="mt-4 space-y-1.5" aria-hidden="true">
                  <span className="block h-1.5 w-11/12 rounded-full bg-line-soft" />
                  <span className="block h-1.5 w-2/3 rounded-full bg-line-soft" />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <span className="rounded-md bg-accent px-3 py-1.5 text-[9px] font-semibold text-accent-ink">
                    Start a project
                  </span>
                  <span className="rounded-md border border-line bg-surface px-3 py-1.5 text-[9px] font-medium text-muted">
                    See work
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px border-t border-line-soft bg-line-soft">
                {["Responsive", "Fast", "Accessible"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center gap-1 bg-surface px-1.5 py-2.5"
                  >
                    <Check width={10} height={10} className="text-accent" />
                    <span className="text-[8px] font-medium text-muted sm:text-[9px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-line bg-surface-2/60 px-3 py-2">
              <span className="flex min-w-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="truncate">Next.js + React</span>
              </span>
              <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                Build ready
              </span>
            </div>
          </div>
        </div>

        <div className="float-slower absolute -left-3 top-24 hidden w-[8.5rem] rounded-xl border border-line bg-surface p-3 shadow-[0_16px_40px_-24px_rgba(23,22,28,0.45)] sm:block">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Sparkle width={14} height={14} />
          </span>
          <p className="mt-2 text-[10px] font-semibold text-foreground">
            Design + build
          </p>
          <p className="mt-0.5 text-[9px] leading-relaxed text-faint">
            One developer, end to end
          </p>
        </div>

        <div className="float-slow absolute -right-3 bottom-8 hidden w-[8.5rem] rounded-xl border border-line bg-surface p-3 shadow-[0_16px_40px_-24px_rgba(23,22,28,0.45)] sm:block">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p className="text-[10px] font-semibold text-foreground">
              Mobile-first
            </p>
          </div>
          <div className="mt-2 space-y-1" aria-hidden="true">
            <span className="block h-1 w-full rounded-full bg-line-soft" />
            <span className="block h-1 w-3/4 rounded-full bg-line-soft" />
          </div>
          <p className="mt-1.5 text-[9px] leading-relaxed text-faint">
            Every screen considered
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div
        className="pointer-events-none absolute inset-0 grid-mask"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-52 left-1/2 h-[34rem] w-[52rem] max-w-[130%] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.72rem] font-medium tracking-wide text-muted shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {siteConfig.role}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.72rem] font-medium tracking-wide text-muted shadow-sm">
                  <MapPin width={12} height={12} className="text-faint" />
                  {siteConfig.location}
                </span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    siteConfig.availability.open
                      ? "bg-emerald-500"
                      : "bg-amber-500"
                  }`}
                  aria-hidden="true"
                />
                {availabilityLabel}
              </p>
            </Reveal>

            <Reveal delay={110}>
              <h1 className="mt-6 text-balance text-[clamp(2.55rem,7vw,4.9rem)] font-semibold leading-[0.99] tracking-[-0.04em] text-foreground">
                I build{" "}
                <span className="font-serif italic font-normal text-accent">
                  digital experiences
                </span>{" "}
                that help businesses{" "}
                <span className="relative inline-block whitespace-nowrap">
                  grow.
                  <svg
                    className="hero-underline absolute -bottom-1 left-0 h-2.5 w-full text-accent/45 sm:-bottom-2"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8.5C44 2.5 104 2 197 6.5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-[0.975rem] leading-relaxed text-muted sm:text-lg">
                I&apos;m {siteConfig.name}, a web developer building modern
                websites and business-focused web applications — designed to
                look credible, feel effortless and help your business move
                forward.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#work"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-md active:translate-y-0"
                >
                  Explore My Work
                  <ArrowRight
                    width={18}
                    height={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-surface-2"
                >
                  Let&apos;s Discuss Your Project
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line-soft pt-6 text-xs text-muted sm:text-sm">
                {specialities.map((item, index) => (
                  <li key={item} className="flex items-center gap-4">
                    {index > 0 && (
                      <span
                        className="h-1 w-1 rounded-full bg-line"
                        aria-hidden="true"
                      />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={220} className="lg:justify-self-end">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
