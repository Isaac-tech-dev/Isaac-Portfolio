import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/site";
import "./globals.css";

const bricolage = localFont({
  src: "./fonts/BricolageGrotesque.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

const instrument = localFont({
  src: "./fonts/InstrumentSans.woff2",
  variable: "--font-instrument",
  weight: "400 700",
  display: "swap",
});

const description =
  "Isaac Ayeni is a mobile and frontend engineer in Lagos building React Native and React apps for banking, health and fitness.";

export const metadata: Metadata = {
  metadataBase: new URL("https://isaac-tech-dev.vercel.app"),
  title: `${profile.name}, ${profile.role}`,
  description,
  openGraph: {
    title: `${profile.name}, ${profile.role}`,
    description,
    url: "/",
    siteName: profile.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0e131b" },
  ],
};

// Before first paint: set the theme (no flash of wrong colors) and mark JS as available so
// scroll reveals can start hidden. If the reveal script never runs, show everything after 3s.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');setTimeout(function(){if(d.dataset.revealReady!=='on')d.classList.remove('js')},3000);try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
