'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Edit3, Loader, MessageCircleMore } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import { Progress } from '@/components/ui/progress';
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

  // Fortschrittsanzeige für das mobile Formular
  const progress = (step / 3) * 100;

  // -----------------------------------------
  // Absenden
  // -----------------------------------------
  const onSubmit: SubmitHandler<contactData> = async (data) => {
    try {
      const result = await addEntry(data);
      if (!result || result.error) {
        toast.error('Fehler beim Absenden.', {
          description: 'Bitte versuchen Sie es erneut.',
        });
        return;
      }

      reset();
      setOpen(false);
      setStep(1);

      toast.success('Ihre Nachricht wurde erfolgreich versendet.', {
        description:
          'Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.',
      });
    } catch {
      toast.error('Etwas ist schiefgelaufen.', {
        description: 'Bitte versuchen Sie es erneut.',
      });
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
                    <div className="leading-none">
                      <FormLabel className="flex cursor-pointer select-none flex-wrap items-center gap-1 font-normal text-sm">
                        <span>Ich akzeptiere die</span>
                        <Link
                          className="underline"
                          href="/privacy"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Datenschutzbestimmungen
                        </Link>
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
    <div className="relative space-y-4">
      <FormField
        control={control}
        name="agb"
        render={({ field }) => (
          <FormItem className="flex items-start space-x-3 rounded-md border p-3">
            <FormControl>
              <Checkbox
                aria-label="AGB akzeptieren"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="leading-none">
              <FormLabel className="flex cursor-pointer select-none flex-wrap items-center gap-1 font-normal text-sm">
                <span>Ich akzeptiere die</span>
                <Link
                  className="underline"
                  href="/privacy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Datenschutzbestimmungen
                </Link>
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      {/* Eingaben ändern */}

      {/* Zusammenfassung */}
      <Card className="border-muted">
        <CardHeader className="">
          <div className="flex w-full items-center justify-between">
            <CardTitle className="text-base">Angaben überprüfen</CardTitle>
            <Button
              className="flex items-center gap-1 text-primary text-sm"
              onClick={() => setStep(1)}
              size="sm"
              type="button"
              variant="ghost"
            >
              <Edit3 className="size-3" />
              <span>Eingaben ändern</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
            <dt className="text-muted-foreground">Name</dt>
            <dd className="font-medium">{getValues('name') || '—'}</dd>

            <dt className="text-muted-foreground">E-Mail</dt>
            <dd className="break-all font-medium">
              {getValues('email') || '—'}
            </dd>

            <dt className="text-muted-foreground">Telefon</dt>
            <dd className="font-medium">{getValues('phone') || '—'}</dd>

            <dt className="text-muted-foreground">Betreff</dt>
            <dd className="font-medium">{getValues('subject') || '—'}</dd>

            <dt className="col-span-full text-muted-foreground">Nachricht</dt>
            <dd className="col-span-full max-h-40 overflow-y-auto whitespace-pre-wrap break-words rounded-md border p-3 text-sm leading-snug">
              {getValues('message') || '—'}
            </dd>
          </dl>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>{triggerElement}</DrawerTrigger>
      <DrawerOverlay />
      <DrawerContent className="flex min-h-[85dvh] flex-col">
        <DrawerHeader className="mx-auto w-full max-w-md">
          <DrawerTitle>Kontaktieren Sie uns!</DrawerTitle>
          <DrawerDescription>
            Gern stehen wir Ihnen für Fragen zur Verfügung.
          </DrawerDescription>

          {/* Fortschrittsanzeige */}
          <div className="mt-1 flex flex-col items-center gap-1">
            <Progress className="w-full" value={progress} />
            <p className="text-muted-foreground text-xs">
              Schritt {step} von 3
            </p>
          </div>
        </DrawerHeader>
        <Form {...form}>
          {/* Keine automatische onSubmit */}
          <form className="flex flex-1 flex-col overflow-y-auto py-2">
            <div className="flex-1 overflow-auto px-3 py-2">
              {step === 1 && StepOne}
              {step === 2 && StepTwo}
              {step === 3 && StepThree}
            </div>

            {/* Footer ohne Linie, Buttons nebeneinander */}
            <DrawerFooter className="sticky bottom-0 flex flex-row items-center justify-end gap-2 bg-background/95 py-3 backdrop-blur-sm">
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
