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
import urlFor from "@/lib/url-for";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { Suspense } from "react";
import { PostSkeleton } from "@/components/skeletons";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params: { slug } }: Props) {
  const post: Post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]
      {
        title,
        slug,
        author->{
          name,
          avatar,
        },
        body,
        image,
        publishedAt,
        _id,
      }
      `,
    { slug }
  );
  return (
    <FullWidthWrapper className="pt-20">
      <div className="py-20">
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
        <div className="w-full text-center space-y-5">
          <div className="flex grow space-x-3">
            <Avatar>
              <AvatarImage src={urlFor(post.author.avatar).width(100).url()} />
              <AvatarFallback>
                {" "}
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </AvatarFallback>
            </Avatar>
            <div className="flex space-x-3">
              <div className="flex-col items-center text-muted-foreground space-x-4 text-sm">
                <p>{post.author.name}</p>
                <p>
                  {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <Separator orientation="vertical" />
              <div className="">
                <h1 className="text-base lg:text-4xl">{post.title}</h1>
              </div>
            </div>
          </div>
        </div>
        <Separator className="w-full mt-3" />
        <div className="space-y-10 lg:w-2/3 mx-auto">
          <PortableText value={post.body} components={RichTextComponent} />
        </div>
      </article>
    </FullWidthWrapper>
  );
}
