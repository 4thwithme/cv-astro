import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://4thwithme.dev/",
  author: "Andrii Popenko",
  desc: "Andrii Popenko's CV.",
  title: "Andrii Popenko",
  subtitle: "Software Engineer",
  ogImage: "andrii-popenko-cv-og.jpg",
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/4thwithme",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/andrii-popenko-3331b3193/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:aopopenko@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
