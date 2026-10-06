import { profile } from "@/data/site";

const lines = ["I build the mobile apps", "people use to bank, train", "and talk to their doctor."];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
      <h1
        className="font-display text-[clamp(2.6rem,7.6vw,6.75rem)] font-semibold leading-[0.95] tracking-[-0.025em]"
        style={{ fontVariationSettings: '"wdth" 90' }}
      >
        {lines.map((line, i) => (
          <span key={line} className="rise md:block" style={{ animationDelay: `${i * 110}ms` }}>
            {line}{" "}
          </span>
        ))}
      </h1>

      <div
        className="rise mt-10 grid gap-8 sm:mt-14 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end"
        style={{ animationDelay: "420ms" }}
      >
        <p className="text-lg leading-relaxed text-muted sm:text-xl">
          I&apos;m {profile.name}, lead mobile developer at Optimus Bank in Lagos. For four
          years I&apos;ve shipped React Native and React apps for banks, health startups
          and fitness brands.
        </p>

        <div className="flex flex-col gap-5 md:items-end">
          <p className="flex items-center gap-2 text-sm text-muted">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="pulse absolute inset-0 rounded-full bg-accent" />
              <span className="relative size-2 rounded-full bg-accent" />
            </span>
            {profile.available}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-5 py-2.5 sm:px-6 sm:py-3 font-medium text-on-accent transition-transform hover:-translate-y-0.5"
            >
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-rule px-5 py-2.5 sm:px-6 sm:py-3 font-medium transition-colors hover:border-ink"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-rule px-5 py-2.5 sm:px-6 sm:py-3 font-medium transition-colors hover:border-ink"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
