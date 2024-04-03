import { urlFor } from "@/lib/utils";
import Image from "next/image";
import { Card } from "./ui/card";
import Typography from "./typography";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => (
      <div className="md:-px-20 lg:-px-36">
        <Card className="relative mx-auto aspect-video overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt="Post"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={urlFor(value).size(10, 10).url()}
            sizes="100%"
          />
        </Card>
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <Typography variant="ul">{children}</Typography>
    ),
    number: ({ children }: any) => (
      <Typography variant="ol">{children}</Typography>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
  block: {
    h1: ({ value }: any) => (
      <Typography variant="h1">{value.children[0].text}</Typography>
    ),
    h2: ({ value }: any) => (
      <Typography variant="h2">{value.children[0].text}</Typography>
    ),
    h3: ({ value }: any) => (
      <Typography variant="h3">{value.children[0].text}</Typography>
    ),
    h4: ({ value }: any) => (
      <Typography variant="h4">{value.children[0].text}</Typography>
    ),
    normal: ({ children }: any) => (
      <Typography variant="p" className="text-justify">
        {children}
      </Typography>
    ),
  },
};
