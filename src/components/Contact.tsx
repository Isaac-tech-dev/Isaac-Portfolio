import { profile } from "@/data/site";

const field =
  "mt-2 w-full rounded-lg border border-rule bg-paper px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-rule bg-surface/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-2 md:gap-16">
        <div data-reveal>
          <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            Hiring for a mobile or frontend role?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Tell me about the team and the product. I usually reply within a day.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="text-link mt-8 inline-block break-all font-display text-xl font-medium sm:text-2xl"
          >
            {profile.email}
          </a>
        </div>

        <form
          action={profile.formAction}
          method="POST"
          data-reveal
          style={{ "--d": "150ms" } as React.CSSProperties}
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea id="message" name="message" rows={6} required className={field} />
          </div>
          {/* Honeypot field for Getform spam filtering */}
          <input type="hidden" name="_gotcha" />
          <button
            type="submit"
            className="rounded-full bg-ink px-7 py-3 font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
