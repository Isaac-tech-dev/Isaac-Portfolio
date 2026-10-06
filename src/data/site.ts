export const profile = {
  name: "Isaac Ayeni",
  role: "Software Engineer",
  location: "Lagos, Nigeria",
  email: "ayeniisaac1on1@gmail.com",
  github: "https://github.com/Isaac-tech-dev",
  linkedin: "https://www.linkedin.com/in/isaac-ayeni/",
  resume:
    "https://drive.google.com/file/d/18Nvqyj9YqpZ-uWnB6kOuD0sCnJnz25l3/view?usp=drive_link",
  available: "Open to remote mobile and frontend roles",
  formAction: "https://getform.io/f/zazokymb",
};

export type Link = { label: string; href: string };

export type FeaturedProject = {
  slug: string;
  title: string;
  client: string;
  year: string;
  summary: string;
  contributions: string[];
  stack: string[];
  image: { src: string; width: number; height: number; alt: string };
  links: Link[];
};

export const featured: FeaturedProject[] = [
  {
    slug: "optiverse",
    title: "Optiverse 2.0",
    client: "Optimus Bank",
    year: "2024",
    summary:
      "Optimus Bank's mobile banking app for iOS and Android, rebuilt with a new interface, a smoother experience and new features.",
    contributions: [
      "Built core banking features end to end",
      "Broke down and assigned technical work across the mobile team",
    ],
    stack: ["React Native CLI", "TypeScript", "Redux Toolkit", "Reanimated"],
    image: {
      src: "/work/optiverse.webp",
      width: 1600,
      height: 1534,
      alt: "Optiverse login screen on Android and iOS",
    },
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/ng/app/optiverse-by-optimus-bank/id6479251367",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.optiversev2&hl=en_US",
      },
    ],
  },
  {
    slug: "account-opening",
    title: "Account opening portals",
    client: "Optimus Bank",
    year: "2023",
    summary:
      "Two web portals for opening accounts: Lite for customers signing up online, and Avanzar for staff onboarding agent customers.",
    contributions: [
      "Lite has driven 100% growth in the bank's customer base",
      "Built both front ends and the Laravel integrations behind them",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Laravel"],
    image: {
      src: "/work/account-opening-lite.webp",
      width: 1600,
      height: 888,
      alt: "Account Opening Lite staff login page",
    },
    links: [],
  },
  {
    slug: "oriz-life",
    title: "Oriz Life",
    client: "Oriz Life, US",
    year: "2024–25",
    summary:
      "A fitness and wellness app where people follow plans they create, track activity and shop a wellness marketplace.",
    contributions: [
      "Designed and built onboarding, sign-in, home, marketplace and profile",
      "Connected Apple HealthKit to track steps, distance and flights climbed",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Redux Toolkit"],
    image: {
      src: "/work/oriz-life.webp",
      width: 1600,
      height: 1454,
      alt: "Oriz Life get-started screen on Android and iOS",
    },
    links: [],
  },
  // {
  //   slug: "ttc",
  //   title: "The Triumphant Community",
  //   client: "TTC Global",
  //   year: "2024",
  //   summary:
  //     "The church's public website, with service times, locations and the latest sermons.",
  //   contributions: ["Designed and built the site"],
  //   stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   image: {
  //     src: "/work/ttc-website.webp",
  //     width: 1600,
  //     height: 888,
  //     alt: "The Triumphant Community website home page",
  //   },
  //   links: [{ label: "Visit site", href: "https://www.ttcglobal.org" }],
  // },
];

export type OtherProject = {
  title: string;
  description: string;
  stack: string;
  links: Link[];
};

export const otherProjects: OtherProject[] = [
  {
    title: "Healthmobile",
    description:
      "Telehealth app for MapIs4U with live chat, voice and video calls with your booked doctor.",
    stack: "React Native, Socket.IO",
    links: [],
  },
  {
    title: "Kubby Space",
    description:
      "Led the mobile app for package pickup and storage, with document scanning built in.",
    stack: "React Native, Expo, Scanbot SDK",
    links: [],
  },
  {
    title: "IUFMP GRM",
    description:
      "Lets Ibadan residents report flooding and other complaints to the city.",
    stack: "Android, PHP",
    links: [],
  },
  {
    title: "PickUps and PickUps Rider",
    description: "Dispatch apps for customers and riders, with Paystack payments.",
    stack: "Android, PHP",
    links: [],
  },
  {
    title: "Coral",
    description: "E-commerce storefront with product carousels and routing.",
    stack: "React, Tailwind CSS",
    links: [{ label: "Demo", href: "https://coral-ecormmerce.vercel.app/" }],
  },
  {
    title: "Travel site",
    description: "Marketing site for a travel and hiking app.",
    stack: "Next.js, Tailwind CSS",
    links: [
      { label: "Demo", href: "https://travel-app-next-js-beta.vercel.app/" },
    ],
  },
  {
    title: "React Native practice apps",
    description: "Travel, fitness and weather apps, recorded as short demos.",
    stack: "React Native, TypeScript",
    links: [
      {
        label: "Travel",
        href: "https://drive.google.com/file/d/17dcW8hD9gBVKDh_SVRIC1Isufr8R3U0l/view?usp=drive_link",
      },
      {
        label: "Fitness",
        href: "https://drive.google.com/file/d/1aTEVezHw3WjKXashuFa8PcVstFJdUcaY/view?usp=drive_link",
      },
      {
        label: "Weather",
        href: "https://drive.google.com/file/d/1lkw2_fLTFaj8Mj-F4KdaNplWPW21aL-Q/view?usp=drive_link",
      },
    ],
  },
  {
    title: "Early web projects",
    description: "A tour site, a restaurant landing page and a vanilla JS store.",
    stack: "React, HTML, CSS, JavaScript",
    links: [
      { label: "Tours", href: "https://tour-website-dev.netlify.app/" },
      { label: "Omnifood", href: "https://omnifood-landing-dev.netlify.app/" },
      { label: "Store", href: "https://ecommerce-dev-test.netlify.app/" },
    ],
  },
];

export type Job = {
  dates: string;
  role: string;
  company: string;
  place: string;
  points: string[];
};

export const experience: Job[] = [
  {
    dates: "March 2023 – now",
    role: "Lead Mobile Developer",
    company: "Optimus Bank",
    place: "Lagos",
    points: [
      "Build core features of Optiverse 2.0, the bank's iOS and Android app, and assign work across the team.",
      "Built the Lite and Avanzar account opening portals, and the account opening flow on the bank's website.",
      "Ship changes to the bank's public website.",
    ],
  },
  {
    dates: "May 2025 - July 2025",
    role: "Mobile Developer (contract)",
    company: "MapIs4U",
    place: "Canada",
    points: [
      "Built the profile, patient, physician, AI and chat screens of a telehealth app.",
      "Added real-time chat plus voice and video calls with Socket.IO.",
    ],
  },
  {
    dates: "December 2024 – July 2025",
    role: "Mobile Developer (contract)",
    company: "Kubby Space",
    place: "US",
    points: [
      "Led development of the mobile app, from sign-in to storage, store and messaging.",
      "Integrated Scanbot SDK for document scanning.",
    ],
  },
  {
    dates: "July 2024 – May 2025",
    role: "Mobile Developer (contract)",
    company: "Oriz Life",
    place: "US",
    points: [
      "Built the main screens of a fitness and wellness app and its sign-in flow.",
      "Integrated Apple HealthKit and the API for user-created plans.",
    ],
  },
  {
    dates: "March 2022 – January 2023",
    role: "Junior Full-stack Engineer",
    company: "The Spotter Company",
    place: "Nigeria",
    points: [
      "Designed and built much of the IUFMP flood complaint app and its API.",
      "Built PickUps and PickUps Rider with Paystack payments.",
      "Taught students mobile development, SQL and software engineering.",
    ],
  },
];

export const education = {
  degree: "BEng, Electrical and Electronics Engineering",
  school: "Covenant University",
  year: "2021",
};

export const skills: { group: string; items: string }[] = [
  {
    group: "Mobile",
    items:
      "React Native, Expo, React Native CLI, Reanimated, Redux Toolkit, Apple HealthKit, Socket.IO",
  },
  {
    group: "Web",
    items: "React, Next.js, Angular, TypeScript, JavaScript, Tailwind CSS, HTML, CSS",
  },
  { group: "Back end", items: "Laravel (PHP), C# and .NET, MySQL" },
  { group: "Testing and tools", items: "Jest, React Native Testing Library, Git" },
];
