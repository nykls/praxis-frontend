import { contactData } from "@/lib/form-schema"; // Importieren Sie Ihren contactData-Typ
import { Heading, Hr, Text } from "@react-email/components";
import * as React from "react";

// Props-Typdefinition, die einen Teil von contactData erwartet
interface EmailTemplateProps {
  data: Pick<contactData, "name" | "email" | "phone" | "message" | "subject">;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  data,
}) => (
  <div>
    <Heading as="h1">{data.subject}-Anfrage erhalten.</Heading>
    <Hr />
    <Heading as="h2">Name</Heading>
    <Text>{data.name}</Text>
    <Heading as="h2">E-Mail</Heading>
    <Text>{data.email}</Text>
    <Heading as="h2">Telefonnummer</Heading>
    <Text>{data.phone}</Text>
    <Heading as="h2">Nachricht</Heading>
    <Text>{data.message}</Text>
  </div>
);
