import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  mainNav: [
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  sidebarNav: [
    {
      title: "Discover",
      href: "/dashboard",
      icon: "waveform",
    },
    {
        title: "Top 50 podcasts",
        href: "/",
        icon: "stars"
    },
    {
        title: "Categories",
        href: "/",
        icon: "badge"
    },
    {
        title: "Add your product",
        href: "/",
        icon: "mic"
    },
  ],
};
