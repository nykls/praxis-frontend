import { Post } from "@/lib/interfaces";
import urlFor from "@/lib/url-for";
import Link from "next/link";
import { Suspense } from "react";
import FullWidthWrapper from "./full-width-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import Balancer from "react-wrap-balancer";
import { client } from "@/sanity/lib/client";
import { unstable_noStore as noStore } from "next/cache";

export default async function NewsCard() {
  try {
    const query = `
    *[_type == 'post']{
      title,
      slug,
      author->{
        name,
        avatar,
      },
      body,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
      image,
      publishedAt,
      _id,
    }
    `;
    const posts = await client.fetch(query);
    noStore();
    return (
      <FullWidthWrapper>
        <section>
          <div className="grid lg:grid-cols-2 gap-2">
            {posts?.length > 0 &&
              posts.map((post: any) => (
                <Link href={`/blog/${post?.slug?.current}`} key={post._id}>
                  <Card
                    className="relative lg:hover:shadow-lg p-4 transition"
                    key={post._id}
                  >
                    <CardHeader className="space-y-3">
                      <div>
                        <CardTitle>
                          <Balancer>{post.title}</Balancer>
                        </CardTitle>
                        <CardDescription>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "de-DE",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>{post.excerpt}</CardContent>
                    <CardFooter>
                      <div className="flex items-center space-x-5">
                        <Avatar>
                          <AvatarImage
                            src={urlFor(post.author.avatar)
                              .size(100, 100)
                              .url()}
                          />
                          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <Separator className="h-8" orientation="vertical" />
                        <p>{post.author.name}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
          </div>
        </section>
      </FullWidthWrapper>
    );
  } catch (err) {
    console.error(err);
  }
}
