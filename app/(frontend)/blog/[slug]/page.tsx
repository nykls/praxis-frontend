import FullWidthWrapper from "@/components/full-width-wrapper";
import NewsContent from "@/components/news";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Post } from "@/lib/interfaces";
import { client } from "@/sanity/lib/client";
import { unstable_cache } from "next/cache";
import Link from "next/link";

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
        image,
        publishedAt,
        _id,
      }
      `;

type Props = {
  params: {
    slug: string;
  };
};

const getPost = unstable_cache(async function BlogPage({
  params: { slug },
}: Props) {
  const post: Post = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 1800 } }
  );
  return post;
});

export async function generateMetadata({ params: { slug } }: Props) {
  const res: Post = await getPost({ params: { slug } });
  return {
    title: {
      template: res.title,
      default: res.title,
    },
    description: res.excerpt,
  };
}

export default async function BlogPage({ params: { slug } }: Props) {
  const post: Post = await getPost({ params: { slug } });
  return (
    <section className="">
      <Breadcrumb className="px-3">
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
              {post.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <FullWidthWrapper>
        <div className="space-y-5">
          <NewsContent {...post} />
        </div>
      </FullWidthWrapper>
    </section>
  );
}
