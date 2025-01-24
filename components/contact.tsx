"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactData, contactSchema } from "@/lib/form-schema";
import { addEntry } from "@/lib/send-mail";
import { useToast } from "@/components/ui/use-toast";
import { useMediaQuery } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";

import { Loader, MessageCircleMore, Edit3 } from "lucide-react";

interface ContactFormProps {
  children?: React.ReactNode;
}

export default function ContactForm({ children }: ContactFormProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const { toast } = useToast();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const form = useForm<contactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      agb: false,
    },
    mode: "onBlur",
  });

  const {
    handleSubmit,
    trigger,
    formState: { isSubmitting },
    control,
    reset,
    getValues,
  } = form;

  // -----------------------------------------
  // Absenden
  // -----------------------------------------
  const onSubmit: SubmitHandler<contactData> = async (data) => {
    try {
      const result = await addEntry(data);
      if (!result || result.error) {
        console.error("Fehler beim Absenden:", result?.error);
        return;
      }

      reset();
      setOpen(false);
      setStep(1);

      toast({
        title: "Ihre Nachricht wurde erfolgreich versendet.",
        description:
          "Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.",
      });
    } catch (error) {
      console.error("Etwas ist schiefgelaufen:", error);
    }
  };

  // -----------------------------------------
  // Mobile Steps
  // -----------------------------------------
  const nextStep = async () => {
    let fieldsToValidate: (keyof contactData)[] = [];
    if (step === 1) fieldsToValidate = ["name", "email", "phone"];
    if (step === 2) fieldsToValidate = ["subject", "message"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep((s) => s + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  // -----------------------------------------
  // Trigger-Element
  // -----------------------------------------
  const defaultTrigger = (
    <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
      <MessageCircleMore className="size-5" />
    </Button>
  );

  const triggerElement = children || defaultTrigger;

  // -----------------------------------------
  // Desktop (alles in einem Schritt)
  // -----------------------------------------
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{triggerElement}</DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Kontaktieren Sie uns!</DialogTitle>
            <DialogDescription>
              Gern stehen wir Ihnen für Fragen zur Verfügung.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 py-2">
              {/* Betreff */}
              <FormField
                control={control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Betreff</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Betreff auswählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Osteopathie">
                            Osteopathie
                          </SelectItem>
                          <SelectItem value="Dentosophie">
                            Dentosophie
                          </SelectItem>
                          <SelectItem value="Yoga">Yoga</SelectItem>
                          <SelectItem value="Qigong">Qigong</SelectItem>
                          <SelectItem value="Terminabsage">
                            Terminabsage
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Name */}
              <FormField
                control={control}
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

              {/* E-Mail */}
              <FormField
                control={control}
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

              {/* Telefon */}
              <FormField
                control={control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefonnummer</FormLabel>
                    <FormControl>
                      <Input placeholder="Telefon" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Nachricht */}
              <FormField
                control={control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nachricht</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ihre Nachricht an uns..."
                        className="resize-none min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* AGB / Datenschutz */}
              <FormField
                control={control}
                name="agb"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="!mb-0">
                        Ich habe die{" "}
                        <a
                          href="/privacy"
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          Datenschutzbestimmungen
                        </a>{" "}
                        gelesen und bin einverstanden.
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Footer: Buttons ohne Linie, nebeneinander */}
              <DialogFooter className="flex items-center justify-end gap-2 mt-4 pt-2">
                <DialogClose asChild>
                  <Button variant="destructive" type="button">
                    Abbrechen
                  </Button>
                </DialogClose>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Senden
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  }

  // -----------------------------------------
  // Mobile: 3-Schritt-Formular
  // -----------------------------------------
  const StepOne = (
    <div className="flex flex-col space-y-5">
      <FormField
        control={control}
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
        control={control}
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
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefonnummer</FormLabel>
            <FormControl>
              <Input placeholder="Telefon" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const StepTwo = (
    <div className="flex flex-col space-y-5">
      <FormField
        control={control}
        name="subject"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Betreff</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Betreff auswählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Osteopathie">Osteopathie</SelectItem>
                  <SelectItem value="Dentosophie">Dentosophie</SelectItem>
                  <SelectItem value="Yoga">Yoga</SelectItem>
                  <SelectItem value="Qigong">Qigong</SelectItem>
                  <SelectItem value="Terminabsage">Terminabsage</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nachricht</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Ihre Nachricht an uns..."
                className="resize-none min-h-[220px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const StepThree = (
    <div className="space-y-2 relative">
      {/* Eingaben ändern */}
      <button
        type="button"
        onClick={() => setStep(1)}
        className="absolute top-0 right-0 text-sm text-primary flex items-center gap-1 mt-1 mr-1"
      >
        <Edit3 className="h-4 w-4" />
        <span>Eingaben ändern</span>
      </button>

      <div className="border rounded-md p-4 space-y-2 text-sm">
        <h3 className="font-semibold mb-2 text-base">Zusammenfassung</h3>
        <div>
          <strong>Name:</strong> {getValues("name")}
        </div>
        <div>
          <strong>E-Mail:</strong> {getValues("email")}
        </div>
        <div>
          <strong>Telefon:</strong> {getValues("phone")}
        </div>
        <div>
          <strong>Betreff:</strong> {getValues("subject")}
        </div>

        {/* Einfacher Scroll-Container */}
        <div>
          <strong>Nachricht:</strong>
          <div className="mt-1 p-2 border rounded-md h-32 overflow-y-auto">
            <p className="whitespace-pre-wrap break-words">
              {getValues("message")}
            </p>
          </div>
        </div>
      </div>

      {/* AGB / Datenschutz */}
      <FormField
        control={control}
        name="agb"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="!mb-0">
                Ich habe die{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Datenschutzbestimmungen
                </a>{" "}
                gelesen und bin einverstanden.
              </FormLabel>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{triggerElement}</DrawerTrigger>
      <DrawerOverlay />
      <DrawerContent className="flex min-h-[80vh] flex-col">
        <DrawerHeader className="max-w-md w-full mx-auto px-4 pt-4">
          <DrawerTitle>Kontaktieren Sie uns!</DrawerTitle>
          <DrawerDescription>
            Gern stehen wir Ihnen für Fragen zur Verfügung.
          </DrawerDescription>
        </DrawerHeader>

        <Form {...form}>
          {/* Keine automatische onSubmit */}
          <form className="flex flex-col flex-1 py-2">
            <div className="flex-1 overflow-auto py-2 px-3">
              {step === 1 && StepOne}
              {step === 2 && StepTwo}
              {step === 3 && StepThree}
            </div>

            {/* Footer ohne Linie, Buttons nebeneinander */}
            <DrawerFooter className="flex flex-row items-center justify-end gap-2">
              <DrawerClose asChild>
                <Button variant="destructive" type="button">
                  Abbrechen
                </Button>
              </DrawerClose>

              {step > 1 && (
                <Button variant="outline" type="button" onClick={prevStep}>
                  Zurück
                </Button>
              )}

              {step < 3 ? (
                <Button type="button" onClick={nextStep}>
                  Weiter
                </Button>
              ) : (
                <Button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleSubmit(onSubmit)()}
                >
                  {isSubmitting && (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Senden
                </Button>
              )}
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
}
