import { profile } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Sections" className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink sm:block"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
          >
            Résumé
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
