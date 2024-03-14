import urlFor from "@/lib/url-for";
import { slugify } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { list } from "postcss";
import { Card } from "./ui/card";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => (
      <Card className="relative mx-auto w-2/3 aspect-video overflow-hidden">
        <Image
          src={urlFor(value).url()}
          alt="Post"
          fill
          className="object-fill"
        />
      </Card>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-7">{children}</ul>
    ),
    number: ({ children }: any) => <ol className="disc-decimal">{children}</ol>,
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
  },
};
