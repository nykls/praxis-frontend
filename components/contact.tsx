"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { addEntry } from "@/actions/send-mail";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";

export default function ContactForm({
  children,
}: {
  children: React.ReactNode;
}) {
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
    mode: "onBlur",
  });
  const {
    reset,
    formState: { isSubmitting },
  } = form;
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
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
        "Vielen Dank für Ihre Nachricht. Ich melde mich so schnell wie möglich bei Ihnen.",
    });
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Kontaktieren Sie mich!</DialogTitle>
            <DialogDescription>
              Gern stehe ich Ihnen für Fragen zur Verfügung.
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
                            <SelectValue placeholder="Bitte wählen Sie einen Betreff aus" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Osteopathie">
                            Ostepathie-Anfrage{" "}
                          </SelectItem>
                          <SelectItem value="Yoga">Yoga-Anfrage</SelectItem>
                          <SelectItem value="Qigong">Qigong-Anfrage</SelectItem>
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
                                Ich habe die Datenschutzbestimmungen gelesen und
                                bin einverstanden.
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
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent
          className="px-2 mx-auto w-full fixed bottom-0 left-0 right-0 max-h-[96%]"
          onOpenAutoFocus={(event) => {
            event.preventDefault();
          }}
        >
          <div className="w-full mx-auto flex flex-col overflow-auto p-4">
            <DrawerHeader>
              <DrawerTitle>Kontaktieren Sie mich!</DrawerTitle>
              <DrawerDescription>
                Gern stehe ich Ihnen für Fragen zur Verfügung.
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
                              <SelectValue placeholder="Bitte wählen Sie einen Betreff aus" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Osteopathie">
                              Ostepathie-Anfrage{" "}
                            </SelectItem>
                            <SelectItem value="Yoga">Yoga-Anfrage</SelectItem>
                            <SelectItem value="Qigong">
                              Qigong-Anfrage
                            </SelectItem>
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
                              Ich habe die Datenschutzbestimmungen gelesen und
                              bin einverstanden.
                            </FormLabel>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <DrawerFooter>
                  <div className="w-full flex justify-end gap-4">
                    <DrawerClose>
                      <Button variant="outline">Abbrechen</Button>
                    </DrawerClose>
                    <Button disabled={isSubmitting}>
                      {isSubmitting && (
                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Senden
                    </Button>
                  </div>
                </DrawerFooter>
              </form>
            </Form>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }
}
