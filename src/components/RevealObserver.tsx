"use client";

import { useEffect } from "react";

// Adds `is-in` to every [data-reveal] element the first time it scrolls into view.
// The CSS in globals.css turns that into the actual motion.
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.revealReady = "on";
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
