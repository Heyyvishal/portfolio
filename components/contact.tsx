import {
  availabilityLabel,
  mailHref,
  siteConfig,
  whatsappHref,
} from "@/lib/site";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  WhatsApp,
} from "@/components/icons";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Reveal } from "@/components/reveal";

const enquiryChecklist = [
  "What your business does",
  "What you need built or improved",
  "Your rough timeline",
  "Any sites or references you like",
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative border-t border-line-soft py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-[0_30px_80px_-55px_rgba(23,22,28,0.45)] sm:p-10 lg:p-14">
          <div
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#f4b183]/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 grid-mask opacity-60"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent">
                  <span className="h-px w-7 bg-accent/50" aria-hidden="true" />
                  Contact
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h2
                  id="contact-title"
                  className="mt-5 text-balance text-[clamp(1.9rem,4.6vw,3.15rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-foreground"
                >
                  Let&apos;s build something that works for your business.
                </h2>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-muted sm:text-base">
                  Have a project in mind? Tell me a little about what
                  you&apos;re building, who it&apos;s for and what you need it
                  to do. I&apos;ll get back to you with clear next steps.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8">
                  <a
                    href={mailHref}
                    className="group inline-flex max-w-full items-center gap-3 text-[clamp(1.15rem,3.5vw,1.65rem)] font-semibold tracking-[-0.02em] text-foreground transition-colors hover:text-accent"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Mail width={18} height={18} />
                    </span>
                    <span className="min-w-0 break-words">
                      {siteConfig.email}
                    </span>
                    <ArrowRight
                      width={18}
                      height={18}
                      className="hidden shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 sm:block"
                    />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={mailHref}
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-md active:translate-y-0"
                  >
                    <Mail width={17} height={17} />
                    Send an Email
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md active:translate-y-0"
                  >
                    <WhatsApp width={17} height={17} />
                    Chat on WhatsApp
                  </a>
                  <CopyEmailButton email={siteConfig.email} />
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted sm:text-sm">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        siteConfig.availability.open
                          ? "bg-emerald-500"
                          : "bg-amber-500"
                      }`}
                      aria-hidden="true"
                    />
                    {availabilityLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin width={14} height={14} className="text-faint" />
                    {siteConfig.location}
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={260}>
              <div className="rounded-2xl border border-line bg-background/70 p-6 backdrop-blur-sm sm:p-7">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  A helpful first email
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  A few details will help me understand the project and reply
                  with something useful.
                </p>

                <ul className="mt-5 space-y-3">
                  {enquiryChecklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <Check
                        width={15}
                        height={15}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-line-soft pt-5">
                  <p className="text-xs leading-relaxed text-faint">
                    Not sure about every detail yet? That&apos;s fine — a short
                    note is enough to start the conversation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
