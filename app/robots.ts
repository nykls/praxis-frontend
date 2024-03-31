import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: ["/", "/blog", "/blog/*, /about"],
      disallow: ["/studio", "/imprint", "/privacy"],
    },
    sitemap: process.env.NEXT_PUBLIC_URL + "sitemap.xml",
  };
}
