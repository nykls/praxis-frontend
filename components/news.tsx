import { RichTextComponent } from "@/components/rich-text-components";
import Typography from "@/components/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/lib/interfaces";
import { urlFor } from "@/lib/utils";
import { PortableText } from "@portabletext/react";

function NewsContent(_post: Post) {
  return (
    <article className="space-y-5">
      <div className="grid mx-auto">
        <div className="flex flex-col space-y-5 md:px-20 lg:px-36">
          <Typography variant="h1">{_post.title}</Typography>
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
            <div className="flex gap-1 flex-col">
              <Typography variant="small">{_post.author.name}</Typography>
              <Typography variant="small">
                {new Date(_post.publishedAt).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </div>
          </div>
          <Separator className="w-full mt-3" />
          <div className="space-y-5">
            <PortableText value={_post.body} components={RichTextComponent} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default NewsContent;
