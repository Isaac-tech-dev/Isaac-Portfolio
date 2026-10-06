import Image from "next/image";
import { featured, otherProjects, type Link } from "@/data/site";

function LinkList({ links, className = "" }: { links: Link[]; className?: string }) {
  if (links.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noreferrer" className="text-link font-medium">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Selected work
        </h2>

        <div className="mt-12 space-y-20 sm:mt-16 sm:space-y-28">
          {featured.map((project, i) => (
            <article
              key={project.slug}
              className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12"
            >
              <div
                className={`overflow-hidden rounded-2xl bg-surface md:col-span-7 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={project.image.src}
                  width={project.image.width}
                  height={project.image.height}
                  alt={project.image.alt}
                  sizes="(min-width: 768px) 640px, 100vw"
                  className="h-auto w-full p-5 sm:p-8 lg:p-10"
                  priority={i === 0}
                />
              </div>

              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="text-sm text-muted">
                  {project.client}, {project.year}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-prose leading-relaxed">{project.summary}</p>
                <ul className="mt-5 space-y-2 text-muted">
                  {project.contributions.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-muted" />
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-muted">{project.stack.join(", ")}</p>
                <LinkList links={project.links} className="mt-6" />
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-24 font-display text-2xl font-semibold tracking-tight sm:mt-32">
          More projects
        </h3>
        <ul className="mt-6 border-t border-rule">
          {otherProjects.map((p) => (
            <li
              key={p.title}
              className="grid gap-1 border-b border-rule py-5 md:grid-cols-12 md:gap-6"
            >
              <p className="font-medium md:col-span-3">{p.title}</p>
              <p className="leading-relaxed text-muted md:col-span-5">{p.description}</p>
              <p className="text-sm text-muted md:col-span-2 md:pt-0.5">{p.stack}</p>
              <LinkList links={p.links} className="text-sm md:col-span-2 md:justify-end md:pt-0.5" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
