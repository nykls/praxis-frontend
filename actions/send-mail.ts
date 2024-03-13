"use server";

import { contactData, contactSchema } from "@/lib/form-schema";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/mail-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function addEntry(data: contactData) {
  const result = contactSchema.safeParse(data);
  if (result.success) {
    await resend.emails.send({
      from: "Niklas Eulitz <niklas@nykls.de>",
      to: ["niklas.eulitz@gmail.com"],
      subject: data.subject + "-Anfrage",
      text: data.message,
      reply_to: data.email,
      react: EmailTemplate({ data }),
    });

    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
