import { unstable_cache } from 'next/cache';
import FullWidthWrapper from '@/components/full-width-wrapper';
import NewsContent from '@/components/news';
import type { Post } from '@/lib/interfaces';
import { client } from '@/sanity/lib/client';

const query = `*[_type == "post" && slug.current == $slug][0]
      {
        title,
        slug,
        author->{
          name,
          avatar,
        },
        "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
        body,
        publishedAt,
        _id,
      }
      `;

type Props = {
  params: {
    slug: string;
  };
};

const getPost = unstable_cache(async function getPostBySlug(slug: string) {
  const post: Post = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 1800 } }
  );
  return post;
});

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const res: Post = await getPost(slug);
  return {
    title: {
      template: res.title,
      default: res.title,
    },
    description: res.excerpt,
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const post: Post = await getPost(slug);
  return (
    <section className="xl:pt-25">
      <FullWidthWrapper>
        <div className="space-y-5">
          <NewsContent {...post} />
        </div>
      </FullWidthWrapper>
    </section>
  );
}
