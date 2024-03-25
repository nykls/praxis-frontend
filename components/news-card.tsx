import urlFor from "@/lib/url-for";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
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

export default async function NewsCard() {
  try {
    const query = `
    *[_type == 'post'] | order(publishedAt desc){
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
    const posts = await client.fetch(query, {}, { next: { revalidate: 1800 } });
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
                    <CardContent>
                      <div className="line-clamp-3">{post.excerpt}</div>
                    </CardContent>
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
          {posts?.length === 0 && (
            <div className="flex h-screen justify-center items-center">
              <h1 className="text-lg text-center">Keine Beiträge gefunden.</h1>
            </div>
          )}
        </section>
      </FullWidthWrapper>
    );
  } catch (err) {
    console.error(err);
  }
}
