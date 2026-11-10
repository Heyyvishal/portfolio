import { mailHref, navLinks, siteConfig } from "@/lib/site";
import { ArrowRight, Mail } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line-soft">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div className="max-w-sm">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5"
              aria-label={`${siteConfig.name} — back to top`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-mono text-sm font-semibold text-accent-ink">
                V
              </span>
              <span className="text-[0.95rem] font-semibold tracking-tight text-foreground">
                {siteConfig.name}
                <span className="text-accent">.</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.role} based in {siteConfig.location}. Designing and
              building modern websites and business-focused web applications.
            </p>
          </div>

          <nav aria-label="Footer" className="sm:justify-self-start">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-faint">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-8 items-center text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:justify-self-start lg:justify-self-end">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-faint">
              Get in touch
            </p>
            <a
              href={mailHref}
              className="group mt-4 inline-flex max-w-full items-start gap-2.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <Mail
                width={16}
                height={16}
                className="mt-0.5 shrink-0 text-accent"
              />
              <span className="break-all">{siteConfig.email}</span>
              <ArrowRight
                width={14}
                height={14}
                className="mt-0.5 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
            <p className="mt-3 text-xs text-faint">
              Share a few details about your project and I&apos;ll reply with
              next steps.
            </p>
          </div>
        </div>

        <p
          className="mt-12 select-none overflow-hidden text-[clamp(3rem,12vw,8rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-foreground/[0.055] sm:mt-16"
          aria-hidden="true"
        >
          Vishal.
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-line-soft pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
