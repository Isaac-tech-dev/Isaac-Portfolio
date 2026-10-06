import { education, experience, skills } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience
        </h2>

        <ol className="mt-10 border-t border-rule sm:mt-12">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.dates}`}
              className="grid gap-2 border-b border-rule py-7 md:grid-cols-12 md:gap-6"
            >
              <p className="text-sm text-muted tabular-nums md:col-span-3 md:pt-1">{job.dates}</p>
              <div className="md:col-span-9">
                <h3 className="text-lg font-semibold">
                  {job.role}
                  <span className="font-normal text-muted">
                    {" "}
                    at {job.company}, {job.place}
                  </span>
                </h3>
                <ul className="mt-3 max-w-[68ch] space-y-1.5 leading-relaxed text-muted">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          <li className="grid gap-2 border-b border-rule py-7 md:grid-cols-12 md:gap-6">
            <p className="text-sm text-muted tabular-nums md:col-span-3 md:pt-1">
              {education.year}
            </p>
            <h3 className="text-lg font-semibold md:col-span-9">
              {education.degree}
              <span className="font-normal text-muted"> at {education.school}</span>
            </h3>
          </li>
        </ol>

        <h3 className="mt-20 font-display text-2xl font-semibold tracking-tight">Skills</h3>
        <dl className="mt-6 grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group}>
              <dt className="font-medium">{s.group}</dt>
              <dd className="mt-1 leading-relaxed text-muted">{s.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
