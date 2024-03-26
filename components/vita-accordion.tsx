import { Resume } from "@/lib/interfaces";
import urlFor from "@/lib/url-for";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { AspectRatio } from "./ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export default async function VitaAccordion() {
  try {
    const query = `
  *[_type == 'resume']{
    name,
    motto,
    avatar,
    "education": education[]{
      title,
      institution,
      years,
    },
    "training": training[]{
      title,
      institution,
    },
    _id,
  }
`;
    const vita = await client.fetch(query, {}, { next: { revalidate: 0 } });
    const vitas: Resume[] = vita;
    return (
      <Accordion
        type="multiple"
        defaultValue={[vitas[0]._id]}
        className="grid gap-3 w-full"
      >
        {vitas?.length > 0 &&
          vitas.map((vita) => (
            <Card key={vita._id} className="lg:p-3">
              <AccordionItem value={vita._id} className="">
                <AccordionTrigger className="my-auto">
                  <CardHeader className="pb-0">
                    <div className="flex items-center space-x-3 justify-between">
                      <Avatar>
                        <AvatarImage
                          src={urlFor(vita.avatar).size(100, 100).url()}
                        />
                        <AvatarFallback>{vita.name[0]}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="">{vita.name}</CardTitle>
                    </div>
                  </CardHeader>
                </AccordionTrigger>
                <CardContent>
                  <AccordionContent>
                    <div className="lg:flex flex-row gap-3">
                      <div className="basis-1/2">
                        <Card className="overflow-hidden">
                          <AspectRatio ratio={2 / 3}>
                            <Image
                              fill
                              alt=""
                              src={urlFor(vita.avatar).url()}
                              className="object-cover"
                            />
                          </AspectRatio>
                        </Card>
                      </div>
                      <div className="basis-1/2 p-3 space-y-12">
                        <div className="text-center p-5 text-xl">
                          <p className="font-serif italic">{vita.motto}</p>
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-center">Ausbildung</h3>
                          {vita.education.map((eduEntry, index) => (
                            <ul className="flex gap-7" key={index}>
                              <li className="italic font-bold">
                                {new Date(eduEntry.years).getFullYear()}{" "}
                              </li>
                              <li className="grow">{eduEntry.title}</li>
                              <li>{eduEntry.institution}</li>
                            </ul>
                          ))}
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-center">Fortbildungen</h3>
                          {vita.training.map((eduEntry, index) => (
                            <ul
                              className="w-full flex justify-between"
                              key={index}
                            >
                              <li>{eduEntry.title}</li>
                              <li>{eduEntry.institution}</li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </CardContent>
              </AccordionItem>
            </Card>
          ))}
      </Accordion>
    );
  } catch (err) {
    console.error(err);
  }
}
