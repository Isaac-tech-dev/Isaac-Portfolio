import { profile } from "@/data/site";

// Write the headline as one sentence. It wraps on its own with balanced line
// lengths, so it reads well at any screen size and any copy length.
const headline =
  "I'm a software engineer who ships tested, scalable web and mobile apps from first idea to production.";
const words = headline.split(" ");

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
    >
      <h1
        className="max-w-[22ch] font-display text-[clamp(2.4rem,6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.025em] [text-wrap:balance]"
        style={{ fontVariationSettings: '"wdth" 90' }}
      >
        {words.map((word, i) => (
          <span key={i}>
            <span className="rise inline-block" style={{ animationDelay: `${i * 35}ms` }}>
              {word}
            </span>{" "}
          </span>
        ))}
      </h1>

      <div
        className="rise mt-10 grid gap-8 sm:mt-14 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end"
        style={{ animationDelay: "550ms" }}
      >
        <p className="text-lg leading-relaxed text-muted sm:text-xl">
          I&apos;m {profile.name}, a Software Engineer in Lagos who works across
          the whole stack. For over four years I&apos;ve built and shipped
          products for banks, health startups and fitness brands, from React
          Native and React frontends to the backend services and APIs behind
          them. That includes Optiverse 2.0 by Optimus Bank, a live fintech app
          on Google Play and the App Store. I handle everything from Figma to
          production, so what reaches users is fast, polished and dependable.
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
