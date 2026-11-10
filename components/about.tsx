import {
  availabilityLabel,
  siteConfig,
  toolkit,
} from "@/lib/site";
import { MapPin, Quote, Sparkle } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const principles = [
  {
    title: "Clarity over clutter",
    description:
      "Every section should have a job. I keep layouts focused so visitors know what to do next.",
  },
  {
    title: "Built for real use",
    description:
      "Responsive, accessible and maintainable — not just good-looking on a single screen size.",
  },
  {
    title: "Details that earn trust",
    description:
      "Typography, spacing and small interactions work together to make a business feel credible.",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative border-t border-line-soft py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <SectionHeading
              id="about-title"
              eyebrow="About"
              title="A developer focused on useful, thoughtful digital products."
              description="I'm Vishal, a web developer based in Chennai. I build modern websites and business-focused web applications with a focus on clarity, speed and everyday usability."
            />

            <Reveal delay={180}>
              <div className="mt-6 space-y-4 text-[0.975rem] leading-relaxed text-muted">
                <p>
                  I care about the details that make a website feel considered:
                  readable typography, sensible structure, fast pages and
                  interactions that guide rather than distract.
                </p>
                <p>
                  My work spans business websites, landing pages and custom web
                  applications. I build with Next.js, React, TypeScript and
                  Tailwind CSS, and I&apos;m comfortable working across the
                  stack with tools like Prisma and PostgreSQL.
                </p>
              </div>
            </Reveal>

            <ul className="mt-9 grid gap-4 sm:grid-cols-3">
              {principles.map((principle, index) => (
                <Reveal as="li" key={principle.title} delay={220 + index * 70}>
                  <div className="h-full rounded-xl border border-line bg-surface/70 p-4">
                    <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-faint">
                      {principle.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={160} className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-[0_28px_70px_-48px_rgba(23,22,28,0.45)] sm:p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 dot-grid opacity-30"
                aria-hidden="true"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent font-serif text-3xl italic text-accent-ink shadow-sm"
                    aria-hidden="true"
                  >
                    V
                  </span>
                  <div>
                    <p className="text-xl font-semibold tracking-tight text-foreground">
                      {siteConfig.name}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{siteConfig.role}</p>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-faint">
                      <MapPin width={12} height={12} />
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
                <span className="hidden rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint sm:inline-block">
                  Portfolio
                </span>
              </div>

              <div className="relative mt-6 flex items-center gap-2 rounded-lg border border-line bg-surface-2/60 px-3 py-2.5 text-xs font-medium text-muted">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    siteConfig.availability.open
                      ? "bg-emerald-500"
                      : "bg-amber-500"
                  }`}
                  aria-hidden="true"
                />
                {availabilityLabel}
              </div>

              <div className="relative mt-6 border-t border-line-soft pt-5">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-faint">
                  Currently
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  Building a private gym-management platform for{" "}
                  <span className="font-medium text-foreground">
                    Prathi Fitness Studio
                  </span>{" "}
                  and taking enquiries for new web projects.
                </p>
              </div>

              <div className="relative mt-5 border-t border-line-soft pt-5">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-faint">
                  Toolkit
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {toolkit.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-6 rounded-xl bg-accent-soft p-4">
                <Quote
                  width={18}
                  height={18}
                  className="text-accent/70"
                />
                <p className="mt-2 text-sm font-medium leading-relaxed text-foreground/90">
                  Good design should make the next step obvious — for the
                  visitor and for the business.
                </p>
                <span className="mt-3 flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-accent">
                  <Sparkle width={11} height={11} />
                  How I approach the work
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
