import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {profile.name}, {profile.location}
        </p>
        <ul className="flex gap-5">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="hover:text-ink">
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
