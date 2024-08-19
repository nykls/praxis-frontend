// components/NewsCard.tsx
import { client } from "@/sanity/lib/client";
import FullWidthWrapper from "./full-width-wrapper";
import Typography from "./typography";
import PostList from "./post-list";
import PaginationControls from "./pagination-controls";

const POSTS_PER_PAGE = 10;

export default async function NewsCard({ page = 1 }: { page?: number }) {
  try {
    const query = `
    {
      "posts": *[_type == 'post'] | order(publishedAt desc) [${
        (page - 1) * POSTS_PER_PAGE
      }...${page * POSTS_PER_PAGE}] {
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
      },
      "totalPosts": count(*[_type == 'post'])
    }
    `;
    const { posts, totalPosts } = await client.fetch(
      query,
      {},
      { next: { revalidate: 1800 } }
    );
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    return (
      <FullWidthWrapper>
        <section>
          <PostList posts={posts} />
          {posts?.length === 0 && (
            <div className="flex h-screen justify-center items-center">
              <Typography variant="h1" className="text-lg text-center">
                Keine Beiträge gefunden.
              </Typography>
            </div>
          )}
          <PaginationControls totalPages={totalPages} />
        </section>
      </FullWidthWrapper>
    );
  } catch (err) {
    console.error(err);
    return <div>Ein Fehler ist aufgetreten.</div>;
  }
}
