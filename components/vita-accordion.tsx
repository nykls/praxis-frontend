'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import type { Resume } from '@/lib/interfaces';
import { urlFor } from '@/lib/utils';
import { RichTextComponent } from './rich-text-components';
import Typography from './typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { AspectRatio } from './ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function VitaAccordion({ vitas }: { vitas: Resume[] }) {
  return (
    <Accordion
      className="grid w-full items-center gap-3"
      defaultValue={vitas?.length > 0 ? [vitas[0]._id] : []}
      type="multiple"
    >
      {vitas?.length > 0 &&
        vitas.map((vita) => (
          <Card className="items-center" key={vita._id}>
            <AccordionItem className="border-none" value={vita._id}>
              <AccordionTrigger className="pe-6">
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-between space-x-3">
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
              <CardContent className="">
                <AccordionContent>
                  <div className="gap-3 text-base lg:flex">
                    <div className="basis-1/2">
                      <Card className="overflow-hidden">
                        <AspectRatio ratio={2 / 3}>
                          <Image
                            alt=""
                            blurDataURL={vita.lqip}
                            className="object-cover"
                            fill
                            placeholder="blur"
                            src={urlFor(vita.avatar).url()}
                          />
                        </AspectRatio>
                      </Card>
                    </div>
                    <div className="basis-1/2 space-y-12 p-3">
                      {vita.motto && (
                        <div className="p-5">
                          <Typography variant="blockquote">
                            {vita.motto}
                          </Typography>
                        </div>
                      )}
                      {vita.education && (
                        <div className="space-y-3">
                          <Typography className="text-center" variant="h2">
                            Ausbildung
                          </Typography>
                          <PortableText
                            components={RichTextComponent}
                            value={vita.education}
                          />
                        </div>
                      )}
                      {vita.training && (
                        <div className="space-y-3">
                          <Typography className="text-center" variant="h2">
                            Fortbildungen
                          </Typography>
                          <PortableText
                            components={RichTextComponent}
                            value={vita.training}
                          />
                        </div>
                      )}
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
