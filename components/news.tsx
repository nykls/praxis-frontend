import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { RichTextComponent } from '@/components/rich-text-components';
import Typography from '@/components/typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import type { Post } from '@/lib/interfaces';
import { urlFor } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

function NewsContent(_post: Post) {
  return (
    <article className="flex flex-col">
      <div className="mx-auto grid">
        <div className="flex flex-col gap-5 xl:gap-20">
          <div>
            <Typography className="mx-auto mt-5" variant="h1">
              {_post.title}
            </Typography>
            {/* <Breadcrumb className="">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/blog">Aktuelles</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="">
                  <BreadcrumbLink className="max-w-20 truncate md:max-w-none">
                    {_post.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>

          <div className="space-y-5 md:px-20 lg:px-36">
            <div className="flex items-center gap-3">
              <div>
                <Avatar>
                  <AvatarImage
                    src={urlFor(_post.author.avatar).size(100, 100).url()}
                  />
                  <AvatarFallback>
                    <AvatarFallback>{_post.author.name[0]}</AvatarFallback>
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col gap-1">
                <Typography variant="small">{_post.author.name}</Typography>
                <Typography variant="small">
                  {new Date(_post.publishedAt).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Typography>
              </div>
            </div>
            <Separator className="" />
            <PortableText components={RichTextComponent} value={_post.body} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default NewsContent;
