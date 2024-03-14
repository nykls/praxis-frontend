import NewsCard from "@/components/news-card";
import { Post } from "@/lib/interfaces";
import { client } from "@/sanity/lib/client";

async function getPosts() {
  try {
    const query = `
    *[_type == 'post']{
      title,
      slug,
      author->{
        name,
        avatar,
      },
      body,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
      image,
      publishedAt,
      _id,
    }
    `;
    const posts = await client.fetch(query);
    return posts;
  } catch (err) {
    console.error(err);
  }
}

export default async function Blog() {
  const posts: Post[] = await getPosts();
  console.log(posts);
  return <NewsCard posts={posts} />;
}
