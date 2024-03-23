import urlFor from "@/lib/url-for";
import { slugify } from "@/lib/utils";
import Image from "next/image";
import { Card } from "./ui/card";
import { text } from "stream/consumers";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => (
      <div className="md:-mx-20">
        <Card className="relative mx-auto aspect-video overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt="Post"
            fill
            className="object-cover"
          />
        </Card>
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul>{children}</ul>,
    number: ({ children }: any) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="list-disc">{children}</li>,
    number: ({ children }: any) => <li className="list-decimal">{children}</li>,
  },
  block: {
    h2: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }: any) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
    normal: ({ children }: any) => <p className="">{children}</p>,
  },
};
