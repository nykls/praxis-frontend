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
import { Metadata } from "next";
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

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const res = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 1800 } }
  );
  return {
    title: {
      template: res.title,
      default: res.title,
    },
    description: res.excerpt,
  };
}

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params: { slug } }: Props) {
  const post: Post = await client.fetch(query, { slug });
  return (
    <FullWidthWrapper>
      <section className="space-y-5">
        <div>
          <Breadcrumb>
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
              <BreadcrumbItem>
                <BreadcrumbLink>{post.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <NewsContent {...post} />
      </section>
    </FullWidthWrapper>
  );
}
