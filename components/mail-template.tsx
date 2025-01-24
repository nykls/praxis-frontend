import { contactData } from "@/lib/form-schema";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Button,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  data: Pick<contactData, "name" | "email" | "phone" | "message" | "subject">;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  data,
}) => {
  // Datum (de-DE) formatiert
  const formattedDate = new Date().toLocaleString("de-DE", {
    dateStyle: "full",
    timeStyle: "short",
  });

  // Prüfen, ob es sich um eine Terminabsage handelt
  const isCancelation = data.subject === "Terminabsage";
  // Haupt-Titel/Überschrift
  const headline = isCancelation
    ? "Terminabsage erhalten"
    : `Neue ${data.subject}-Anfrage`;

  // Vorschau / Preview im E-Mail Client
  const previewText = isCancelation
    ? `Neue Terminabsage von ${data.name}`
    : `Neue ${data.subject}-Anfrage von ${data.name}`;

  return (
    <Html>
      <Head>
        <title>{`Neue Anfrage von ${data.name}`}</title>{" "}
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          {`
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #111111 !important;
              }
              .card {
                background-color: #1c1c1e !important;
                box-shadow: 0 1px 2px rgba(255, 255, 255, 0.05) !important;
              }
              .text {
                color: #ffffff !important;
              }
              .muted {
                color: #a3a3a3 !important;
              }
              .info-card {
                background-color: #2c2c2e !important;
              }
              .button {
                background-color: #2c2c2e !important;
                border: 1px solid #3c3c3e !important;
                color: #ffffff !important;
              }
              .button-primary {
                background-color: #0A84FF !important;
                border: none !important;
                color: #ffffff !important;
              }
            }
            
            @media screen and (max-width: 640px) {
              .container {
                padding: 12px !important;
              }
              .card {
                padding: 20px !important;
              }
              .button-container {
                flex-direction: column !important;
              }
              .button {
                width: 100% !important;
                margin: 6px 0 !important;
              }
            }
          `}
        </style>
      </Head>

      {/* Vorschautext im E-Mail Client */}
      <Preview>{previewText}</Preview>

      <Body style={styles.body}>
        <Container style={styles.container} className="container">
          <Section style={styles.card} className="card">
            {/* Status-Badge */}
            <div style={styles.statusBadge}>
              <div style={styles.statusDot} />
              <Text style={styles.statusText}>Neue Anfrage</Text>
            </div>

            <Heading style={styles.mainHeading} className="text">
              {headline}
            </Heading>

            <Text style={styles.timestamp} className="muted">
              {formattedDate}
            </Text>

            {/* Kontakt-Info */}
            <Section style={styles.infoCard} className="info-card">
              <Text style={styles.label} className="muted">
                Kontaktdaten
              </Text>
              <div style={styles.contactDetails}>
                <Text style={styles.contactName} className="text">
                  {data.name}
                </Text>
                <Text style={styles.contactInfo} className="text">
                  {data.email}
                </Text>
                <Text style={styles.contactInfo} className="text">
                  {data.phone}
                </Text>
              </div>
            </Section>

            {/* Nachricht */}
            <Section style={styles.messageCard} className="info-card">
              <Text style={styles.label} className="muted">
                Nachricht
              </Text>
              <Text style={styles.message} className="text">
                {data.message}
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Inline-Styles
const styles = {
  body: {
    backgroundColor: "#f5f5f7",
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  container: {
    margin: "0 auto",
    padding: "10px",
    width: "100%",
    maxWidth: "100%",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 2px 20px rgba(0, 0, 0, 0.04)",
    maxWidth: "100%",
    margin: "0 auto",
  },
  statusBadge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#34c759",
  },
  statusText: {
    fontSize: "14px",
    color: "#34c759",
    fontWeight: "500",
    margin: 0,
  },
  mainHeading: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1d1d1f",
    margin: "0 0 8px",
    lineHeight: "1.3",
  },
  timestamp: {
    fontSize: "14px",
    color: "#86868b",
    margin: "0 0 24px",
  },
  infoCard: {
    backgroundColor: "#f5f5f7",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "16px",
    width: "100%",
  },
  messageCard: {
    backgroundColor: "#f5f5f7",
    borderRadius: "12px",
    padding: "16px",
    width: "100%",
    marginBottom: "24px",
  },
  label: {
    fontSize: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
    color: "#86868b",
    fontWeight: "600",
    margin: "0 0 8px",
  },
  contactDetails: {
    display: "grid",
    gap: "4px",
  },
  contactName: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1d1d1f",
    margin: 0,
  },
  contactInfo: {
    fontSize: "14px",
    color: "#1d1d1f",
    margin: 0,
  },
  message: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#1d1d1f",
    margin: 0,
    whiteSpace: "pre-wrap" as const,
  },
  buttonContainer: {
    display: "flex",
    gap: "12px",
    marginTop: "8px",
  },
  buttonPrimary: {
    display: "inline-block",
    backgroundColor: "#0A84FF",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    textAlign: "center" as const,
    minWidth: "120px",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#f5f5f7",
    color: "#000000",
    padding: "12px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    textAlign: "center" as const,
    minWidth: "120px",
  },
};

export default EmailTemplate;
