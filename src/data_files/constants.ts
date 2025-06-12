import ogImageSrc from "@images/placeholder-social.png";

export const SITE = {
  title: "AI & Web Dev SaaS Hub",
  tagline: "Your Curated AI & Web Development SaaS Marketplace",
  description: "Discover top-tier SaaS solutions in AI and Web Development. We feature curated tools, expert reviews, and trending software to accelerate your projects.",
  description_short: "Curated AI & Web Dev SaaS tools, reviews, and trends.",
  url: "https://screwfast.uk", // Leaving as is, as per instructions
  author: "AI & Web Dev SaaS Hub Team",
};

export const SEO = {
  title: "AI & Web Dev SaaS Hub | Trending SaaS Products",
  description: "Your ultimate guide to the best AI and Web Development SaaS products. Explore curated lists, in-depth reviews, and find the perfect tools for your needs.",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: "AI & Web Dev SaaS Hub: Top AI & Web Dev Software",
  description: "Navigate the world of AI and Web Development SaaS with our curated marketplace. Featuring trending tools, expert insights, and community recommendations.",
  image: ogImageSrc,
};

const placeholderSvgIcon = "<svg viewBox='0 0 100 100'><rect width='100' height='100' fill='#cccccc'/></svg>";

export const partnersData = [
    {
        icon: placeholderSvgIcon,
        name: "AI Innovators Inc.",
        href: "#",
    },
    {
        icon: placeholderSvgIcon,
        name: "Web Solutions Co.",
        href: "#",
    },
    {
        icon: placeholderSvgIcon,
        name: "DevTools Hub",
        href: "#",
    },
    {
        icon: placeholderSvgIcon,
        name: "SaaSify Platform",
        href: "#",
    },
];