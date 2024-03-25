import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: ["/"],
      disallow: ["/studio", "/impressum", "/privacy"],
    },
    sitemap: process.env.NEXT_URL + "/sitemap.xml",
  };
}
