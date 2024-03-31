import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: ["Googlebot", "Applebot", "Bingbot"],
      allow: ["/"],
      disallow: ["/studio", "/imprint", "/privacy"],
    },

    sitemap: process.env.NEXT_PUBLIC_URL + "sitemap.xml",
  };
}
