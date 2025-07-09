import type { Metadata } from 'next';
import { Suspense } from 'react';
import FullWidthWrapper from '@/components/full-width-wrapper';
import NewsCard from '@/components/news-card';
import { CardSkeleton } from '@/components/skeletons';
import Typography from '@/components/typography';
import { client } from '@/sanity/lib/client';

export const metadata: Metadata = {
  title: 'Blog – Aktuelles aus der Praxis',
  description:
    'Lesen Sie die neuesten Artikel und Nachrichten aus der Praxis für Osteopathie, Dentosophie, Yoga & Qigong. Erfahren Sie mehr über unsere Methoden, Behandlungen und Kurse.',
  keywords:
    'Blog, Aktuelles, Neuigkeiten, Osteopathie, Dentosophie, Yoga, Qigong, Gesundheit, Praxis-News',
};

const POSTS_PER_PAGE = 6;

async function getPosts(page: number) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
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
        publishedAt,
        _id,
      },
      "totalPosts": count(*[_type == 'post'])
    }
    `;
  const data = await client.fetch(query, {}, { next: { revalidate: 1800 } });
  return data;
}

async function Posts({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1;
  const { posts, totalPosts } = await getPosts(currentPage);
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  return <NewsCard posts={posts} totalPages={totalPages} />;
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <section className="xl:pt-25">
      <FullWidthWrapper>
        <Typography className="m-5 mx-auto" variant="h1">
          Aktuelles
        </Typography>
      </FullWidthWrapper>
      <Suspense fallback={<CardSkeleton />}>
        <Posts searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
