# Isaac Ayeni — portfolio

Personal site built with Next.js (App Router), TypeScript and Tailwind CSS v4. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

## Editing content

All copy lives in `src/data/site.ts`: profile links, featured projects, the "More projects" list, experience, education and skills. Components in `src/components` only handle layout.

To add a featured project, drop a screenshot (about 1600px wide, `.webp`) into `public/work/` and add an entry to `featured` with its width and height.

## Notes

- Fonts (Bricolage Grotesque, Instrument Sans) are self-hosted from `src/app/fonts` under the SIL Open Font License.
- Light and dark themes follow the visitor's system setting; the header button overrides it and remembers the choice.
- `STATIC_EXPORT=1 npm run build` writes a plain static site to `out/` if you ever want to host it outside Vercel.
- The contact form posts to Getform (`profile.formAction`).
