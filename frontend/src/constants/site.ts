export const siteConfig = {
  name: "CloudLearn AI",

  shortName: "CloudLearn",

  description:
    "CloudLearn AI is an interactive learning platform for Programming, Artificial Intelligence, Machine Learning, Data Science, Cloud Computing, Cyber Security, Full Stack Development, DevOps and B.Tech subjects.",

  url: "https://cloudlearn.ai",

  logo: "/logo.png",

  ogImage: "/og-image.png",

  email: "support@cloudlearn.ai",

  links: {
    github: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  },

  navigation: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Domains",
      href: "/domains",
    },
    {
      title: "Learning Paths",
      href: "/learning-paths",
    },
    {
      title: "Certificates",
      href: "/certificates",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;