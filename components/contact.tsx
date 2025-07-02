'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Edit3, Loader, MessageCircleMore } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { type contactData, contactSchema } from '@/lib/form-schema';
import { addEntry } from '@/lib/send-mail';
import { useMediaQuery } from '@/lib/utils';

interface ContactFormProps {
  children?: React.ReactNode;
}

export default function ContactForm({ children }: ContactFormProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const form = useForm<contactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      agb: false,
    },
    mode: 'onBlur',
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
        console.error('Fehler beim Absenden:', result?.error);
        return;
      }

      reset();
      setOpen(false);
      setStep(1);

      toast('Ihre Nachricht wurde erfolgreich versendet.', {
        description:
          'Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.',
      });
    } catch (error) {
      console.error('Etwas ist schiefgelaufen:', error);
    }
  };

  // -----------------------------------------
  // Mobile Steps
  // -----------------------------------------
  const nextStep = async () => {
    let fieldsToValidate: (keyof contactData)[] = [];
    if (step === 1) fieldsToValidate = ['name', 'email', 'phone'];
    if (step === 2) fieldsToValidate = ['subject', 'message'];

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
    <Button onClick={() => setOpen(true)} size="icon" variant="ghost">
      <MessageCircleMore className="size-5" />
    </Button>
  );

  const triggerElement = children || defaultTrigger;

  // -----------------------------------------
  // Desktop (alles in einem Schritt)
  // -----------------------------------------
  if (isDesktop) {
    return (
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger asChild>{triggerElement}</DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Kontaktieren Sie uns!</DialogTitle>
            <DialogDescription>
              Gern stehen wir Ihnen für Fragen zur Verfügung.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form className="space-y-5 py-2" onSubmit={handleSubmit(onSubmit)}>
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
                        <SelectTrigger className="w-full">
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
                        className="min-h-[120px] resize-none"
                        placeholder="Ihre Nachricht an uns..."
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
                  <FormItem className="flex flex-row items-start gap-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 pt-0.5 leading-none">
                      <FormLabel className="font-normal">
                        Ich habe die{' '}
                        <Link
                          className="underline"
                          href="/privacy"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Datenschutzbestimmungen
                        </Link>{' '}
                        gelesen und bin einverstanden.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Footer: Buttons ohne Linie, nebeneinander */}
              <DialogFooter className="mt-4 flex items-center justify-end gap-2 pt-2">
                <DialogClose asChild>
                  <Button type="button" variant="destructive">
                    Abbrechen
                  </Button>
                </DialogClose>
                <Button disabled={isSubmitting} type="submit">
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
                <SelectTrigger className="w-full">
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
                className="min-h-[220px] resize-none"
                placeholder="Ihre Nachricht an uns..."
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
    <div className="relative space-y-2">
      {/* Eingaben ändern */}
      <button
        className="absolute top-0 right-0 mt-1 mr-1 flex items-center gap-1 text-primary text-sm"
        onClick={() => setStep(1)}
        type="button"
      >
        <Edit3 className="h-4 w-4" />
        <span>Eingaben ändern</span>
      </button>

      <div className="space-y-2 rounded-md border p-4 text-sm">
        <h3 className="mb-2 font-semibold text-base">Zusammenfassung</h3>
        <div>
          <strong>Name:</strong> {getValues('name')}
        </div>
        <div>
          <strong>E-Mail:</strong> {getValues('email')}
        </div>
        <div>
          <strong>Telefon:</strong> {getValues('phone')}
        </div>
        <div>
          <strong>Betreff:</strong> {getValues('subject')}
        </div>

        {/* Einfacher Scroll-Container */}
        <div>
          <strong>Nachricht:</strong>
          <div className="mt-1 h-32 overflow-y-auto rounded-md border p-2">
            <p className="whitespace-pre-wrap break-words">
              {getValues('message')}
            </p>
          </div>
        </div>
      </div>

      {/* AGB / Datenschutz */}
      <FormField
        control={control}
        name="agb"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start gap-3">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 pt-0.5 leading-none">
              <FormLabel className="font-normal">
                Ich habe die{' '}
                <Link
                  className="underline"
                  href="/privacy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Datenschutzbestimmungen
                </Link>{' '}
                gelesen und bin einverstanden.
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>{triggerElement}</DrawerTrigger>
      <DrawerOverlay />
      <DrawerContent className="flex min-h-[80vh] flex-col">
        <DrawerHeader className="mx-auto w-full max-w-md px-4 pt-4">
          <DrawerTitle>Kontaktieren Sie uns!</DrawerTitle>
          <DrawerDescription>
            Gern stehen wir Ihnen für Fragen zur Verfügung.
          </DrawerDescription>
        </DrawerHeader>

        <Form {...form}>
          {/* Keine automatische onSubmit */}
          <form className="flex flex-1 flex-col py-2">
            <div className="flex-1 overflow-auto px-3 py-2">
              {step === 1 && StepOne}
              {step === 2 && StepTwo}
              {step === 3 && StepThree}
            </div>

            {/* Footer ohne Linie, Buttons nebeneinander */}
            <DrawerFooter className="flex flex-row items-center justify-end gap-2">
              <DrawerClose asChild>
                <Button type="button" variant="destructive">
                  Abbrechen
                </Button>
              </DrawerClose>

              {step > 1 && (
                <Button onClick={prevStep} type="button" variant="outline">
                  Zurück
                </Button>
              )}

              {step < 3 ? (
                <Button onClick={nextStep} type="button">
                  Weiter
                </Button>
              ) : (
                <Button
                  disabled={isSubmitting}
                  onClick={() => handleSubmit(onSubmit)()}
                  type="button"
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
