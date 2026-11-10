import { projects } from "@/lib/site";
import {
  ArrowRight,
  Check,
  Lock,
  ShieldCheck,
  Sparkle,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

function PrivateAppMock() {
  return (
    <div
      className="project-media relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-38px_rgba(23,22,28,0.5)]"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-line-soft bg-surface-2/80 px-3.5 py-2.5 sm:px-4 sm:py-3">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.13em] text-faint">
          <Lock width={10} height={10} />
          Private dashboard
        </span>
        <span className="ml-auto hidden items-center gap-1.5 text-[9px] font-medium text-faint sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          Internal use only
        </span>
      </div>

      <div className="grid grid-cols-[2.25rem_1fr] sm:grid-cols-[3rem_1fr]">
        <div className="flex flex-col items-center gap-3 border-r border-line-soft bg-surface-2/50 py-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent font-mono text-[9px] font-semibold text-accent-ink">
            P
          </span>
          <span className="h-4 w-4 rounded border border-line bg-surface" />
          <span className="h-4 w-4 rounded border border-line bg-surface" />
          <span className="h-4 w-4 rounded border border-line bg-surface" />
          <span className="mt-auto h-4 w-4 rounded-full border border-line bg-surface" />
        </div>

        <div className="min-w-0 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold text-foreground sm:text-xs">
                Studio overview
              </p>
              <p className="mt-0.5 text-[8px] text-faint sm:text-[9px]">
                Day-to-day operations
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-accent/15 bg-accent-soft px-2 py-1 text-[8px] font-medium text-accent">
              <Lock width={9} height={9} />
              Restricted
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Members", "Renewals", "Enquiries"].map((label, index) => (
              <div
                key={label}
                className="rounded-lg border border-line-soft bg-surface-2/55 p-2 sm:p-2.5"
              >
                <p className="truncate text-[8px] font-medium text-faint sm:text-[9px]">
                  {label}
                </p>
                <div className="mt-2 h-2.5 w-10 rounded-full bg-line sm:h-3 sm:w-12" />
                <div className="mt-1.5 h-1.5 w-6 rounded-full bg-line-soft" />
                <span
                  className="mt-2 block h-1 rounded-full bg-accent/20"
                  style={{ width: `${48 + index * 14}%` }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          <div className="mt-2 grid gap-2 sm:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-lg border border-line-soft bg-surface-2/55 p-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-medium text-faint sm:text-[9px]">
                  Activity
                </span>
                <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-faint">
                  6 mo
                </span>
              </div>
              <div
                className="mt-2 flex h-14 items-end gap-1 sm:h-16"
                aria-hidden="true"
              >
                {[42, 60, 36, 72, 50, 84, 58, 90, 64, 78, 52, 86].map(
                  (height, index) => (
                    <span
                      key={index}
                      className={`flex-1 rounded-sm ${
                        index % 3 === 0 ? "bg-accent/35" : "bg-line"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}
              </div>
            </div>

            <div className="space-y-1.5 rounded-lg border border-line-soft bg-surface-2/55 p-2.5">
              <span className="text-[8px] font-medium text-faint sm:text-[9px]">
                Recent records
              </span>
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 rounded-md border border-line-soft bg-surface px-1.5 py-1.5"
                >
                  <span className="h-3.5 w-3.5 shrink-0 rounded bg-line-soft" />
                  <span className="h-1 flex-1 rounded-full bg-line-soft" />
                  <span className="h-1 w-5 rounded-full bg-line" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-line-soft bg-surface px-2.5 py-1.5 text-[8px] text-faint">
            <ShieldCheck width={10} height={10} className="shrink-0 text-accent" />
            No member data or private screenshots are shown.
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptMock() {
  return (
    <div
      className="project-media relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-[#f1eee7] shadow-[0_24px_60px_-38px_rgba(23,22,28,0.4)]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 dot-grid opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute -right-12 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-[#f4b183]/30 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col p-3.5 sm:p-4">
        <div className="flex items-center gap-2 rounded-lg border border-line bg-surface/85 px-3 py-2 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="ml-1 truncate font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
            Concept study
          </span>
          <span className="ml-auto rounded-full border border-line bg-surface px-2 py-0.5 text-[8px] font-medium text-faint">
            Demo
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center px-1 py-4">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent">
            Open slot · 02
          </span>
          <p className="mt-2 max-w-[16rem] text-[clamp(1.5rem,4.5vw,2.2rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground">
            Your next{" "}
            <span className="font-serif italic font-normal text-accent">
              chapter
            </span>{" "}
            starts here.
          </p>
          <div className="mt-3 max-w-[15rem] space-y-1" aria-hidden="true">
            <span className="block h-1 w-full rounded-full bg-foreground/10" />
            <span className="block h-1 w-4/5 rounded-full bg-foreground/10" />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-md bg-foreground px-3 py-1.5 text-[8px] font-semibold text-background">
              Start a project
            </span>
            <span className="rounded-md border border-line bg-surface/70 px-3 py-1.5 text-[8px] font-medium text-muted">
              See approach
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-lg border border-line bg-surface/80 px-3 py-2 backdrop-blur">
          <span className="flex items-center gap-1.5 text-[8px] font-medium text-muted">
            <Sparkle width={10} height={10} className="text-accent" />
            Editorial layout study
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
            Not a client project
          </span>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative border-t border-line-soft py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="work-title"
            eyebrow="Selected work"
            title="Built with purpose. Designed to perform."
            description="A closer look at the kind of work I do. Private client projects are described at a high level only — no confidential data, member records or private screenshots are shown."
          />
          <a
            href="#contact"
            className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-foreground sm:inline-flex"
          >
            Discuss your project
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface transition-colors group-hover:border-accent/30 group-hover:bg-accent-soft group-hover:text-accent">
              <ArrowRight
                width={15}
                height={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </div>

        <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
          {projects.map((project, index) => {
            const isPrivate = project.status === "private";
            const reversed = index % 2 === 1;
            return (
              <Reveal key={project.id}>
                <article
                  className="group relative overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition-all duration-500 hover:-translate-y-0.5 focus-within:border-accent/30 hover:border-accent/25 hover:shadow-[0_30px_70px_-45px_rgba(23,22,28,0.45)]"
                >
                  <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
                    <div
                      className={`order-2 p-6 sm:p-8 lg:p-10 ${
                        reversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-medium ${
                            isPrivate
                              ? "border-accent/20 bg-accent-soft text-accent"
                              : "border-line bg-surface-2 text-muted"
                          }`}
                        >
                          {isPrivate ? (
                            <>
                              <Lock width={12} height={12} className="shrink-0" />
                              <span className="min-w-0">{project.label}</span>
                            </>
                          ) : (
                            <>
                              <span
                                className="h-1.5 w-1.5 shrink-0 rounded-full bg-faint"
                                aria-hidden="true"
                              />
                              <span className="min-w-0">{project.label}</span>
                            </>
                          )}
                        </span>
                      </div>

                      <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">
                        {project.tagline}
                      </p>
                      <h3 className="mt-2 text-balance text-[clamp(1.55rem,3.4vw,2.15rem)] font-semibold tracking-[-0.03em] text-foreground">
                        {project.name}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-[0.975rem]">
                        {project.description}
                      </p>

                      {project.features.length > 0 && (
                        <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                          {project.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 text-sm text-foreground/90"
                            >
                              <Check
                                width={15}
                                height={15}
                                className="mt-0.5 shrink-0 text-accent"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      {project.tech.length > 0 && (
                        <div className="mt-6 border-t border-line-soft pt-5">
                          <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-faint">
                            Tech stack
                          </p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <li
                                key={tech}
                                className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mt-7">
                        {isPrivate ? (
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3.5 py-2.5 text-xs font-medium text-muted">
                              <ShieldCheck
                                width={15}
                                height={15}
                                className="shrink-0 text-accent"
                              />
                              No public demo — client data stays private
                            </span>
                            <a
                              href="#contact"
                              className="group/link inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink shadow-sm transition-colors hover:bg-accent-strong"
                            >
                              Discuss a similar project
                              <ArrowRight
                                width={16}
                                height={16}
                                className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                              />
                            </a>
                          </div>
                        ) : (
                          <a
                            href="#contact"
                            className="group/link inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink shadow-sm transition-colors hover:bg-accent-strong"
                          >
                            Start a project
                            <ArrowRight
                              width={16}
                              height={16}
                              className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                            />
                          </a>
                        )}
                      </div>
                    </div>

                    <div
                      className={`relative order-1 flex items-center overflow-hidden border-b border-line-soft bg-[linear-gradient(145deg,#f3f1ea_0%,#ece9e1_100%)] p-5 sm:p-7 lg:border-b-0 ${
                        reversed
                          ? "lg:order-1 lg:border-r"
                          : "lg:order-2 lg:border-l"
                      }`}
                    >
                      <div
                        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-2xl"
                        aria-hidden="true"
                      />
                      <div className="relative w-full">
                        {isPrivate ? <PrivateAppMock /> : <ConceptMock />}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 sm:hidden">
          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-surface-2"
          >
            Discuss your project
            <ArrowRight width={16} height={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
