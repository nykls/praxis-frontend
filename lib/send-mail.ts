"use server";

import { contactData, contactSchema } from "@/lib/form-schema";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/mail-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function addEntry(data: contactData) {
  // Validierung des Inputs
  const parseResult = contactSchema.safeParse(data);

  // Guard Clause bei Validierungsfehler
  if (!parseResult.success) {
    return { success: false, error: parseResult.error.format() };
  }

  // Environment-Check
  const recipient = process.env.NEXT_PUBLIC_MAIL;
  if (!recipient) {
    return {
      success: false,
      error: "Mail-Empfänger (NEXT_PUBLIC_MAIL) ist nicht konfiguriert.",
    };
  }

  const validatedData = parseResult.data;

  // Subjekt zusammensetzen
  const subject =
    validatedData.subject === "Terminabsage"
      ? validatedData.subject
      : `${validatedData.subject}-Anfrage`;

  try {
    // Mail senden
    await resend.emails.send({
      from: "Kontaktformular <info@osteopathie-radebeul.de>",
      to: [recipient],
      subject,
      text: validatedData.message,
      reply_to: validatedData.email, // ggf. auf `replyTo` ändern, wenn Resend das so erwartet
      react: EmailTemplate({ data: validatedData }),
    });

    return { success: true, data: validatedData };
  } catch (err) {
    // Fehler beim Versand abfangen
    return {
      success: false,
      error: `Fehler beim Senden der E-Mail: ${(err as Error).message}`,
    };
  }
}
