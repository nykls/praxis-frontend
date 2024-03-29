import { urlFor } from "@/lib/utils";
import Image from "next/image";
import { Card } from "./ui/card";

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
            placeholder="blur"
            blurDataURL={urlFor(value).size(10, 10).url()}
            sizes="100vw"
          />
        </Card>
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="ml-7">{children}</ul>,
    number: ({ children }: any) => <ol className="ml-7">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="list-disc">{children}</li>,
    number: ({ children }: any) => <li className="list-decimal">{children}</li>,
  },
  block: {
    h2: ({ value }: any) => (
      <h2 className="text-3xl font-bold mb-3">{value.children[0].text}</h2>
    ),
    h3: ({ value }: any) => (
      <h3 className="text-2xl font-bold mb-3">{value.children[0].text}</h3>
    ),
    h4: ({ value }: any) => (
      <h4 className="text-2xl font-bold mb-3">{value.children[0].text}</h4>
    ),
    h5: ({ value }: any) => (
      <h5 className="text-2xl font-bold mb-3">{value.children[0].text}</h5>
    ),
    h6: ({ value }: any) => (
      <h6 className="text-xl font-bold mb-3">{value.children[0].text}</h6>
    ),
    normal: ({ children }: any) => <p className="">{children}</p>,
  },
};
