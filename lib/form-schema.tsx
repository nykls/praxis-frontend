import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .regex(new RegExp(/^[a-zA-ZäöüÄÖÜß]+([-|\s][a-zA-ZäöüÄÖÜß]+)*\s*$/), {
      message: "Bitte Vor- und Nachnamen angeben.",
    }),
  subject: z.string().min(1, {
    message: "Bitte wählen Sie einen Betreff aus.",
  }),
  email: z.string().email({
    message: "Bitte gültige E-Mail-Adresse angeben.",
  }),
  phone: z
    .string()
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      {
        message: "Bitte gültige Telefonnummer eingeben angeben.",
      }
    ),
  message: z.string().min(10, {
    message: "Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.",
  }),
  agb: z
    .boolean()
    .refine((value) => value === true, {
      message: "Bitte akzeptieren Sie die Datenschutzbestimmungen.",
    })
    .default(false),
});

export type contactData = z.infer<typeof contactSchema>;
