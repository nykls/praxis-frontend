import FullWidthWrapper from "@/components/full-width-wrapper";
import { RichTextComponent } from "@/components/rich-text-components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/lib/interfaces";
import { urlFor } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
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
        <article className="space-y-5">
          <div className="w-full space-y-5">
            <div className="flex grow space-x-3">
              <div>
                <Avatar>
                  <AvatarImage
                    src={urlFor(post.author.avatar).size(100, 100).url()}
                  />
                  <AvatarFallback>
                    {" "}
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="flex text-center space-x-3">
                <div className="flex-col text-nowrap text-muted-foreground space-x-3 text-sm">
                  <p>{post.author.name}</p>
                  <p>
                    {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-auto" />
              <div className="">
                <div className="">
                  <h1 className="text-base lg:text-4xl">{post.title}</h1>
                </div>
              </div>
            </div>
          </div>
          <Separator className="w-full mt-3" />
          <div className="space-y-10 mx-auto md:px-20">
            <PortableText value={post.body} components={RichTextComponent} />
          </div>
        </article>
      </section>
    </FullWidthWrapper>
  );
}
