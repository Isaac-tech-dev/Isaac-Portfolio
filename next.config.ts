import type { NextConfig } from "next";

// STATIC_EXPORT=1 produces a plain static site in out/ (used for local previews).
const staticExport = Boolean(process.env.STATIC_EXPORT);

const nextConfig: NextConfig = {
  output: staticExport ? "export" : undefined,
  images: { unoptimized: staticExport },
};

export default nextConfig;
