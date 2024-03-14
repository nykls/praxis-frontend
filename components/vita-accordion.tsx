import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AspectRatio } from "./ui/aspect-ratio";
import { Separator } from "./ui/separator";
import { Resume } from "@/lib/interfaces";
import { Fetches } from "@/lib/api-fetch";
import urlFor from "@/lib/url-for";
import Image from "next/image";

async function VitaAccordion({ vitas }: { vitas: Resume[] }) {
  // const vitas: Resume[] = await Fetches("resume");
  return (
    <Accordion
      type="multiple"
      defaultValue={[vitas[0]._id]}
      className="grid gap-3"
    >
      {vitas?.length > 0 &&
        vitas.map((vita) => (
          <Card key={vita._id} className="lg:p-3">
            <AccordionItem value={vita._id} className="">
              <AccordionTrigger className="my-auto">
                <CardHeader className="pb-0">
                  <div className="flex items-center space-x-3 justify-between">
                    <Avatar>
                      <AvatarImage src={urlFor(vita.avatar).width(100).url()} />
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
                            style={{ objectFit: "cover" }}
                          />
                        </AspectRatio>
                      </Card>
                    </div>
                    <div className="basis-1/2 p-3">
                      <div className="text-center p-5 text-xl">
                        <p className="font-serif italic">{vita.motto}</p>
                      </div>
                      <div className="py-3">
                        <h3>Ausbildung</h3>
                      </div>
                      <div>
                        {vita.education.map((eduEntry, index) => (
                          <div className="space-y-7" key={index}>
                            <div className="flex space-x-5 text-md">
                              <div>
                                <p className="italic font-bold">
                                  {new Date(eduEntry.years.start).getFullYear()}{" "}
                                  - {new Date(eduEntry.years.end).getFullYear()}
                                </p>
                              </div>
                              <div className="grow">
                                <p>{eduEntry.title}</p>
                              </div>
                              <div className="">
                                <p>{eduEntry.institution}</p>
                              </div>
                            </div>
                            <Separator className="mx-auto w-2/3" />
                          </div>
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
}

export default VitaAccordion;
