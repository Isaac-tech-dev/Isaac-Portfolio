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

// Sets the theme before first paint so there is no flash of the wrong colors.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

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
