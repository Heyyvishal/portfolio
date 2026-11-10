import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <Reveal>
        <span
          className={`inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-7 bg-accent/50" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          id={id}
          className="mt-5 text-balance text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground"
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-4 max-w-xl text-[0.975rem] leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
