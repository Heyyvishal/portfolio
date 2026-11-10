import { processSteps } from "@/lib/site";
import { Check } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative border-t border-line-soft py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="process-title"
          eyebrow="Process"
          title="A simple, transparent process."
          description="No jargon and no surprises. Here's exactly how we'll work together from first conversation to launch."
        />

        <ol className="relative mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <span
            className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-line md:hidden"
            aria-hidden="true"
          />
          <span
            className="absolute left-6 right-6 top-[1.375rem] hidden h-px bg-line lg:block"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.step}
              delay={index * 80}
              className="relative pl-16 md:pl-0"
            >
              <div className="absolute left-0 top-1 z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft font-mono text-sm font-semibold text-accent shadow-sm md:relative md:left-auto md:top-auto md:mb-6">
                {step.step}
              </div>

              <div className="group h-full rounded-2xl border border-line bg-surface p-5 shadow-sm transition-all duration-300 hover:border-accent/25 hover:shadow-[0_18px_44px_-38px_rgba(23,22,28,0.4)] sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <span
                    className="h-px w-7 bg-line transition-colors group-hover:bg-accent/50"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={220}>
          <div className="mt-8 flex flex-col gap-3 rounded-xl border border-line bg-surface/60 px-5 py-4 text-sm text-muted sm:flex-row sm:items-center sm:gap-6">
            <span className="inline-flex items-center gap-2 font-medium text-foreground">
              <Check width={16} height={16} className="text-accent" />
              Clear communication at every step
            </span>
            <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
            <span>
              You&apos;ll always know what&apos;s happening and what comes next.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
