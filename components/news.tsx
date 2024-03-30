import { Post } from "@/lib/interfaces";
import React from "react";
import FullWidthWrapper from "@/components/full-width-wrapper";
import { RichTextComponent } from "@/components/rich-text-components";
import Typography from "@/components/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Link from "next/link";

function NewsContent(_post: Post) {
  return (
    <article className="space-y-5">
      <div className="w-full space-y-5">
        <div className="flex grow space-x-3">
          <div>
            <Avatar>
              <AvatarImage
                src={urlFor(_post.author.avatar).size(100, 100).url()}
              />
              <AvatarFallback>
                {" "}
                <AvatarFallback>{_post.author.name[0]}</AvatarFallback>
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex text-center space-x-3">
            <div className="flex-col text-nowrap text-muted-foreground space-x-3 text-sm">
              <Typography variant="p">{_post.author.name}</Typography>
              <Typography variant="p">
                {new Date(_post.publishedAt).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </div>
          </div>
          <Separator orientation="vertical" className="h-auto" />
          <div className="">
            <div className="">
              <Typography variant="h1" className="">
                {_post.title}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Separator className="w-full mt-3" />
      <div className="space-y-10 mx-auto md:px-20">
        <PortableText value={_post.body} components={RichTextComponent} />
      </div>
    </article>
  );
}

export default NewsContent;
