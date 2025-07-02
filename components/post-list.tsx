// components/PostList.tsx

import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import type { Post } from '@/lib/interfaces';
import { urlFor } from '@/lib/utils';
import Typography from './typography';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Separator } from './ui/separator';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {posts?.length > 0 &&
        posts.map((post: Post) => (
          <Link href={`/blog/${post?.slug?.current}`} key={post._id}>
            <Card
              className="relative transition lg:hover:shadow-lg"
              key={post._id}
            >
              <CardHeader className="space-y-1">
                <CardTitle>
                  <Balancer>{post.title}</Balancer>
                </CardTitle>
                <CardDescription>
                  {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="line-clamp-3">{post.excerpt}</div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage
                      src={urlFor(post.author.avatar).size(100, 100).url()}
                    />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <Separator className="h-8" orientation="vertical" />
                  <Typography variant="p">{post.author.name}</Typography>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
    </div>
  );
}
