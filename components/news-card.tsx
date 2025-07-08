// components/NewsCard.tsx
import type { Post } from '@/lib/interfaces';
import FullWidthWrapper from './full-width-wrapper';
import PaginationControls from './pagination-controls';
import PostList from './post-list';
import Typography from './typography';

export default function NewsCard({
  posts,
  totalPages,
}: {
  posts: Post[];
  totalPages: number;
}) {
  return (
    <FullWidthWrapper>
      <section>
        <PostList posts={posts} />
        {posts?.length === 0 && (
          <div className="flex h-screen items-center justify-center">
            <Typography className="text-center text-lg" variant="h1">
              Keine Beiträge gefunden.
            </Typography>
          </div>
        )}
        {totalPages > 1 && <PaginationControls totalPages={totalPages} />}
      </section>
    </FullWidthWrapper>
  );
}
