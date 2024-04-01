import { client } from "@/sanity/lib/client";

const query = `*[_type == "post"]
      {
        slug,
        publishedAt
      }
      `;

export default async function sitemap() {
  const res = await client.fetch(query);
  return [
    ...res.map(
      (post: {
        slug: { current: string };
        publishedAt: string | number | Date;
      }) => ({
        url: `${process.env.NEXT_PUBLIC_URL}blog/${post.slug.current}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "always",
      })
    ),
    {
      url: process.env.NEXT_PUBLIC_URL,
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: process.env.NEXT_PUBLIC_URL + "blog",
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: process.env.NEXT_PUBLIC_URL + "about",
      lastModified: new Date(),
      changeFrequency: "always",
    },
  ];
}
