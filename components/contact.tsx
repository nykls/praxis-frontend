"use client";
import React from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import type { contactData } from "@/lib/form-schema";
import { contactSchema } from "@/lib/form-schema";
import { addEntry } from "@/lib/send-mail";
import { useMediaQuery } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExternalLink, Loader } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { MessageCircleMore } from "lucide-react";

interface ContactFormProps {
  children?: React.ReactNode;
}

export default function ContactForm({ children }: ContactFormProps) {
  const [open, setOpen] = useState(false);

  const defaultValues: Partial<contactData> = {
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    agb: false,
  };
  const form = useForm<contactData>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "all",
  });
  const {
    reset,
    formState: { isSubmitting },
  } = form;
  const { toast } = useToast();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const processForm: SubmitHandler<contactData> = async (data) => {
    const result = await addEntry(data);

    if (!result) {
      console.log("Something went wrong");
      return;
    }

    if (result.error) {
      // set local error state
      console.log(result.error);
      return;
    }
    reset();
    toast({
      title: "Ihre Nachricht wurde erfolgreich versendet.",
      description:
        "Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.",
    });
    setOpen(false);
  };

  const defaultTrigger = (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setOpen(true)}
      className="hover:text-primary transition-colors duration-300"
    >
      <MessageCircleMore className="size-5" />
    </Button>
  );

  const trigger = children
    ? React.cloneElement(children as React.ReactElement, {
        onClick: () => setOpen(true),
      })
    : React.cloneElement(defaultTrigger, {
        onClick: () => setOpen(true),
      });

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        {trigger}

        <DialogContent id="contactFormDialog">
          <DialogHeader>
            <DialogTitle>Kontaktieren Sie uns!</DialogTitle>
            <DialogDescription>
              Gern stehen wir Ihnen für Fragen zur Verfügung.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(processForm)}>
              <div className="space-y-6 pt-6">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Betreff</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Betreff auswählen" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Osteopathie">
                            Ostepathie{" "}
                          </SelectItem>
                          <SelectItem value="Yoga">Yoga</SelectItem>
                          <SelectItem value="Qigong">Qigong</SelectItem>
                          <SelectItem value="Terminabsage">
                            Terminabsage{" "}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input placeholder="E-Mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefonnummer</FormLabel>
                      <FormControl>
                        <Input placeholder="Telefonnummer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nachricht</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ihre Nachricht an uns..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <div className="flex justify-end">
                    <FormField
                      control={form.control}
                      name="agb"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex space-x-2 items-center">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-x-2 leading-none">
                              <FormLabel>
                                Ich habe die{" "}
                                <Link href="/privacy">
                                  <DialogClose>
                                    <Button
                                      variant={"link"}
                                      className="p-0 h-auto w-auto"
                                    >
                                      Datenschutzbestimmungen
                                    </Button>
                                  </DialogClose>
                                </Link>{" "}
                                gelesen und bin einverstanden.
                              </FormLabel>
                            </div>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button disabled={isSubmitting}>
                      {isSubmitting && (
                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Senden
                    </Button>
                  </div>
                </DialogFooter>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  } else {
    return (
      <Drawer
        open={open}
        onOpenChange={setOpen}
        setBackgroundColorOnScale={false}
      >
        {trigger}
        <DrawerContent
          className="mx-auto w-full fixed space-y-3 bottom-0 left-0 right-0 max-h-[96%] max-w-full"
          onOpenAutoFocus={(event) => {
            event.preventDefault();
          }}
        >
          <div className="w-full mx-auto flex flex-col overflow-auto px-3">
            <DrawerHeader>
              <DrawerTitle>Kontaktieren Sie uns!</DrawerTitle>
              <DrawerDescription>
                Gern stehen wir Ihnen für Fragen zur Verfügung.
              </DrawerDescription>
            </DrawerHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(processForm)}>
                <div className="space-y-3	">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Betreff</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                className="text-base"
                                placeholder="Betreff auswählen"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Osteopathie">
                              Ostepathie
                            </SelectItem>
                            <SelectItem value="Yoga">Yoga</SelectItem>
                            <SelectItem value="Qigong">Qigong</SelectItem>
                            <SelectItem value="Terminabsage">
                              Terminabsage
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                          <Input placeholder="E-Mail" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefonnummer</FormLabel>
                        <FormControl>
                          <Input placeholder="Telefonnummer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nachricht</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ihre Nachricht an uns..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="agb"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex space-x-2 items-center">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-x-2 leading-none">
                            <FormLabel>
                              Ich habe die{" "}
                              <Link href="/privacy">
                                <DrawerClose>
                                  <Button
                                    variant={"link"}
                                    className="p-0 h-auto w-auto"
                                  >
                                    Datenschutzbestimmungen
                                  </Button>
                                </DrawerClose>
                              </Link>{" "}
                              gelesen und bin einverstanden.
                            </FormLabel>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <DrawerFooter className="px-0">
                  <Button disabled={isSubmitting} variant="outline">
                    {isSubmitting && (
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Senden
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="destructive">Abbrechen</Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </Form>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }
}
