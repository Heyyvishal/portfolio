import { services } from "@/lib/site";
import { ArrowRight, Check, serviceIcons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative border-t border-line-soft py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(59,64,224,0.055),transparent_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="What I can build for you."
            description="Whether you need a credible online presence or a custom tool to run your business, I handle the design and development end to end."
          />
          <Reveal delay={180}>
            <p className="max-w-xs text-sm leading-relaxed text-faint lg:text-right">
              Clear scope, thoughtful design and a build that stays fast,
              responsive and maintainable.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.id} delay={index * 80}>
                <article className="group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_24px_60px_-42px_rgba(23,22,28,0.45)] sm:p-7 lg:p-8">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/5 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100 sm:opacity-0"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover/card:bg-accent group-hover/card:text-accent-ink">
                      <Icon width={22} height={22} />
                    </span>
                    <span className="font-mono text-xs font-medium tracking-[0.15em] text-faint">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-balance text-xl font-semibold tracking-[-0.025em] text-foreground">
                    {service.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <ul className="relative mt-6 grid gap-2.5 border-t border-line-soft pt-5 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <Check
                          width={14}
                          height={14}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="relative mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-md text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
                  >
                    Discuss this service
                    <ArrowRight
                      width={15}
                      height={15}
                      className="transition-transform duration-300 group-hover/card:translate-x-1"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
