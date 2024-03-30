import FullWidthWrapper from "@/components/full-width-wrapper";
import Typography from "@/components/typography";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <FullWidthWrapper className="space-y-3 flex-col">
      <Typography variant="h1">Datenschutzerklärung</Typography>
      <Typography variant="h2">
        Allgemeiner Hinweis und Pflichtinformationen
      </Typography>
      <Typography variant="h3">
        Benennung der verantwortlichen Stelle
      </Typography>
      <Typography variant="p">
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
        ist:
      </Typography>
      <br />
      <Typography variant="p">
        <span>
          Praxis für Osteopathie, Yoga & Qigong
          <br />
          Maitri Katrin Eulitz
        </span>
        <br />
        <span id="s3-t-strasse">Gartenstraße 13</span>
        <br />
        <span id="s3-t-plz">01445</span> <span id="s3-t-ort">Radebeul</span>
      </Typography>
      <br />
      <Typography variant="p">
        Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen
        über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
        (z.B. Namen, Kontaktdaten o. Ä.).
      </Typography>
      <Typography variant="h3">
        Widerruf Ihrer Einwilligung zur Datenverarbeitung
      </Typography>
      <Typography variant="p">
        Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
        Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
        Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
        formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
        erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </Typography>
      <Typography variant="h3">
        Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
      </Typography>
      <Typography variant="p">
        Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
        Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist
        der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz
        unseres Unternehmens befindet. Der{" "}
        <Link
          href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
          target="_blank"
          className="text-primary underline"
        >
          folgende Link stellt eine Liste der Datenschutzbeauftragten sowie
          deren Kontaktdaten
        </Link>{" "}
        bereit.
      </Typography>
      <Typography variant="h3">Recht auf Datenübertragbarkeit</Typography>
      <Typography variant="p">
        Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
        Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten,
        an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt
        in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung
        der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
        soweit es technisch machbar ist.
      </Typography>
      <Typography variant="h3">
        Recht auf Auskunft, Berichtigung, Sperrung, Löschung
      </Typography>
      <Typography variant="p">
        Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
        Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
        Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren
        Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über
        die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
      </Typography>
      <Typography variant="h3">SSL- bzw. TLS-Verschlüsselung</Typography>
      <Typography variant="p">
        Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
        Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website
        eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese
        Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine
        verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers
        und am Schloss-Symbol in der Browserzeile.
      </Typography>

      <Typography variant="h2">Server-Log-Dateien</Typography>
      <Typography variant="p">
        In Server-Log-Dateien erhebt und speichert der Provider der Website
        automatisch Informationen, die Ihr Browser automatisch an uns
        übermittelt. Dies sind:
      </Typography>
      <Typography variant="ul">
        <li>
          <Typography variant="p">Besuchte Seite auf unserer Domain</Typography>
        </li>
        <li>
          <Typography variant="p">
            Datum und Uhrzeit der Serveranfrage
          </Typography>
        </li>
        <li>
          <Typography variant="p">Browsertyp und Browserversion</Typography>
        </li>
        <li>
          <Typography variant="p">Verwendetes Betriebssystem</Typography>
        </li>
        <li>
          <Typography variant="p">Referrer URL</Typography>
        </li>
        <li>
          <Typography variant="p">
            Hostname des zugreifenden Rechners
          </Typography>
        </li>
        <li>
          <Typography variant="p">IP-Adresse</Typography>
        </li>
      </Typography>
      <Typography variant="p">
        Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen
        statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b
        DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder
        vorvertraglicher Maßnahmen gestattet.
      </Typography>

      <Typography variant="h2">Kontaktformular</Typography>
      <Typography variant="p">
        Per Kontaktformular übermittelte Daten werden einschließlich Ihrer
        Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um
        für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet
        ohne Ihre Einwilligung nicht statt.
      </Typography>
      <Typography variant="p">
        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
        ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
        DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit
        möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail.
        Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
      </Typography>
      <Typography variant="p">
        Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie
        uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
        widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht.
        Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen -
        bleiben unberührt.
      </Typography>

      <Typography variant="h2">Cookies</Typography>
      <Typography variant="p">
        Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr
        Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser
        Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
      </Typography>
      <Typography variant="p">
        Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende
        Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere
        Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen.
        Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website
        wiederzuerkennen.
      </Typography>
      <Typography variant="p">
        Mit einem modernen Webbrowser können Sie das Setzen von Cookies
        überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich
        so konfigurieren, dass Cookies mit dem Schließen des Programms von
        selbst gelöscht werden. Die Deaktivierung von Cookies kann eine
        eingeschränkte Funktionalität unserer Website zur Folge haben.
      </Typography>
      <Typography variant="p">
        Das Setzen von Cookies, die zur Ausübung elektronischer
        Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen
        erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf
        Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website
        haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur
        technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste.
        Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen)
        erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.
      </Typography>

      <Typography variant="h2">Cloudflare CDN</Typography>
      <Typography variant="h3">Art und Umfang der Verarbeitung</Typography>
      <Typography variant="p">
        Wir verwenden zur ordnungsgemäßen Bereitstellung der Inhalte unserer
        Website Cloudflare CDN. Cloudflare CDN ist ein Dienst der Cloudflare,
        Inc., welcher auf unserer Website als Content Delivery Network (CDN)
        fungiert.
      </Typography>
      <Typography variant="p">
        Ein CDN trägt dazu bei, Inhalte unseres Onlineangebotes, insbesondere
        Dateien wie Grafiken oder Skripte, mit Hilfe regional oder international
        verteilter Server schneller bereitzustellen. Wenn Sie auf diese Inhalte
        zugreifen, stellen Sie eine Verbindung zu Servern der Cloudflare, Inc.,
        her, wobei Ihre IP-Adresse und ggf. Browserdaten wie Ihr User-Agent
        übermittelt werden. Diese Daten werden ausschließlich zu den oben
        genannten Zwecken und zur Aufrechterhaltung der Sicherheit und
        Funktionalität von Cloudflare CDN verarbeitet.
      </Typography>
      <Typography variant="h3">Zweck und Rechtsgrundlage</Typography>
      <Typography variant="p">
        Die Nutzung des Content Delivery Networks erfolgt auf Grundlage unserer
        berechtigten Interessen, d.h. Interesse an einer sicheren und
        effizienten Bereitstellung sowie der Optimierung unseres Onlineangebotes
        gemäß Art. 6 Abs. 1 lit. f. DSGVO.
      </Typography>
      <Typography variant="p">
        Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des
        Europäischen Wirtschaftsraums, insbesondere die USA, zu übermitteln. In
        Fällen, in denen kein Angemessenheitsbeschluss der Europäischen
        Kommission existiert (z.B. in den USA) haben wir mit den Empfängern der
        Daten anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO
        vereinbart. Dies sind – sofern nicht anders angegeben –
        Standardvertragsklauseln der EU-Kommission gemäß Durchführungsbeschluss
        (EU) 2021/914 vom 4. Juni 2021. Eine Kopie dieser
        Standardvertragsklauseln können Sie{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE"
          className="text-primary underline"
        >
          hier
        </Link>{" "}
        einsehen.
      </Typography>
      <Typography variant="h3">Speicherdauer</Typography>
      <Typography variant="p">
        Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns
        beeinflussbar, sondern wird von Cloudflare, Inc. bestimmt. Weitere
        Hinweise finden Sie in der{" "}
        <Link
          href="https://www.cloudflare.com/privacypolicy/"
          className="text-primary underline"
        >
          Datenschutzerklärung für Cloudflare CDN
        </Link>
        .
      </Typography>

      <Typography variant="h2">Google CDN</Typography>
      <Typography variant="h3">Art und Umfang der Verarbeitung</Typography>
      <Typography variant="p">
        Wir verwenden zur ordnungsgemäßen Bereitstellung der Inhalte unserer
        Website Google CDN. Google CDN ist ein Dienst der Google Ireland
        Limited, welcher auf unserer Website als Content Delivery Network (CDN)
        fungiert.
      </Typography>
      <Typography variant="p">
        Ein CDN trägt dazu bei, Inhalte unseres Onlineangebotes, insbesondere
        Dateien wie Grafiken oder Skripte, mit Hilfe regional oder international
        verteilter Server schneller bereitzustellen. Wenn Sie auf diese Inhalte
        zugreifen, stellen Sie eine Verbindung zu Servern der Google Ireland
        Limited, Gordon House, Barrow Street, Dublin 4, Irland her, wobei Ihre
        IP-Adresse und ggf. Browserdaten wie Ihr User-Agent übermittelt werden.
        Diese Daten werden ausschließlich zu den oben genannten Zwecken und zur
        Aufrechterhaltung der Sicherheit und Funktionalität von Google CDN
        verarbeitet.
      </Typography>
      <Typography variant="h3">Zweck und Rechtsgrundlage</Typography>
      <Typography variant="p">
        Die Nutzung des Content Delivery Networks erfolgt auf Grundlage unserer
        berechtigten Interessen, d.h. Interesse an einer sicheren und
        effizienten Bereitstellung sowie der Optimierung unseres Onlineangebotes
        gemäß Art. 6 Abs. 1 lit. f. DSGVO.
      </Typography>
      <Typography variant="p">
        Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des
        Europäischen Wirtschaftsraums, insbesondere die USA, zu übermitteln. In
        Fällen, in denen kein Angemessenheitsbeschluss der Europäischen
        Kommission existiert (z.B. in den USA) haben wir mit den Empfängern der
        Daten anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO
        vereinbart. Dies sind – sofern nicht anders angegeben –
        Standardvertragsklauseln der EU-Kommission gemäß Durchführungsbeschluss
        (EU) 2021/914 vom 4. Juni 2021. Eine Kopie dieser
        Standardvertragsklauseln können Sie{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE"
          className="text-primary underline"
        >
          hier{" "}
        </Link>{" "}
        einsehen.
      </Typography>
      <Typography variant="h3">Speicherdauer</Typography>
      <Typography variant="p">
        Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns
        beeinflussbar, sondern wird von Google Ireland Limited bestimmt. Weitere
        Hinweise finden Sie in der{" "}
        <Link
          href="https://policies.google.com/privacy"
          className="text-primary underline"
        >
          Datenschutzerklärung für Google CDN
        </Link>
        .
      </Typography>

      <Typography variant="h2">jsDelivr CDN</Typography>
      <Typography variant="h3">Art und Umfang der Verarbeitung</Typography>
      <Typography variant="p">
        Wir verwenden zur ordnungsgemäßen Bereitstellung der Inhalte unserer
        Website JSDelivr CDN. JSDelivr CDN ist ein Dienst der Prospect One,
        welcher auf unserer Website als Content Delivery Network (CDN) fungiert.
      </Typography>
      <Typography variant="p">
        Ein CDN trägt dazu bei, Inhalte unseres Onlineangebotes, insbesondere
        Dateien wie Grafiken oder Skripte, mit Hilfe regional oder international
        verteilter Server schneller bereitzustellen. Wenn Sie auf diese Inhalte
        zugreifen, stellen Sie eine Verbindung zu Servern der Prospect One,
        Krolewska 65a, Krakow, Malopolskie 30-081, Poland her, wobei Ihre
        IP-Adresse und ggf. Browserdaten wie Ihr User-Agent übermittelt werden.
        Diese Daten werden ausschließlich zu den oben genannten Zwecken und zur
        Aufrechterhaltung der Sicherheit und Funktionalität von JSDelivr CDN
        verarbeitet.
      </Typography>
      <Typography variant="h3">Zweck und Rechtsgrundlage</Typography>
      <Typography variant="p">
        Die Nutzung des Content Delivery Networks erfolgt auf Grundlage unserer
        berechtigten Interessen, d.h. Interesse an einer sicheren und
        effizienten Bereitstellung sowie der Optimierung unseres Onlineangebotes
        gemäß Art. 6 Abs. 1 lit. f. DSGVO.
      </Typography>
      <Typography variant="h3">Speicherdauer</Typography>
      <Typography variant="p">
        Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns
        beeinflussbar, sondern wird von Prospect One bestimmt. Weitere Hinweise
        finden Sie in der{" "}
        <Link
          href="https://www.jsdelivr.com/privacy-policy-jsdelivr-net"
          className="text-primary underline"
        >
          Datenschutzerklärung für JSDelivr CDN{" "}
        </Link>
        .
      </Typography>

      <Typography variant="h2">Google Maps</Typography>
      <Typography variant="h3">Art und Umfang der Verarbeitung</Typography>
      <Typography variant="p">
        Wir verwenden zur Erstellung von Anfahrtsbeschreibungen den Kartendienst
        Google Maps. Google Maps ist ein Dienst der Google Ireland Limited,
        welcher auf unserer Website eine Karte darstellt. Wenn Sie auf diese
        Inhalte unserer Website zugreifen, stellen Sie eine Verbindung zu
        Servern der Google Ireland Limited, Gordon House, Barrow Street, Dublin
        4, Irland her, wobei Ihre IP-Adresse und ggf. Browserdaten wie Ihr
        User-Agent übermittelt werden. Diese Daten werden ausschließlich zu den
        oben genannten Zwecken und zur Aufrechterhaltung der Sicherheit und
        Funktionalität von Google Maps verarbeitet.
      </Typography>
      <Typography variant="h3">Zweck und Rechtsgrundlage</Typography>
      <Typography variant="p">
        Der Einsatz von Google Maps erfolgt auf Grundlage Ihrer Einwilligung
        gemäß Art. 6 Abs. 1 lit. a. DSGVO und § 25 Abs. 1 TTDSG.
      </Typography>
      <Typography variant="p">
        Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des
        Europäischen Wirtschaftsraums, insbesondere die USA, zu übermitteln. In
        Fällen, in denen kein Angemessenheitsbeschluss der Europäischen
        Kommission existiert (z.B. in den USA) haben wir mit den Empfängern der
        Daten anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO
        vereinbart. Dies sind – sofern nicht anders angegeben –
        Standardvertragsklauseln der EU-Kommission gemäß Durchführungsbeschluss
        (EU) 2021/914 vom 4. Juni 2021. Eine Kopie dieser
        Standardvertragsklauseln können Sie{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE"
          className="text-primary underline"
        >
          hier
        </Link>{" "}
        einsehen.
      </Typography>
      <Typography variant="p">
        Zudem holen wir vor einem solchen Drittlandtransfer Ihre Einwilligung
        nach Art. 49 Abs. 1 Satz 1 lit. a. DSGVO ein, die Sie über die
        Einwilligung im Consent Manager (oder sonstigen Formularen,
        Registrierungen etc.) erteilen. Wir weisen Sie darauf hin, dass bei
        Drittlandübermittlungen im Detail unbekannte Risiken (z.B. die
        Datenverarbeitung durch Sicherheitsbehörden des Drittlandes, deren
        genauer Umfang und deren Folgen für Sie wir nicht kennen, auf die wir
        keinen Einfluss haben und von denen Sie unter Umständen keine Kenntnis
        erlangen) bestehen können.
      </Typography>
      <Typography variant="h3">Speicherdauer</Typography>
      <Typography variant="p">
        Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns
        beeinflussbar, sondern wird von Google Ireland Limited bestimmt. Weitere
        Hinweise finden Sie in der{" "}
        <Link
          href="https://policies.google.com/privacy"
          className="text-primary underline"
        >
          Datenschutzerklärung für Google Maps:
        </Link>
        .
      </Typography>

      <Typography variant="h2">Google Web Fonts</Typography>
      <Typography variant="h3">Art und Umfang der Verarbeitung</Typography>
      <Typography variant="p">
        Wir verwenden Google Fonts von Google Ireland Limited, Gordon House,
        Barrow Street, Dublin 4, Irland, als Dienst zur Bereitstellung von
        Schriftarten für unser Onlineangebot. Um diese Schriftarten zu beziehen,
        stellen Sie eine Verbindung zu Servern von Google Ireland Limited her,
        wobei Ihre IP-Adresse übertragen wird.
      </Typography>
      <Typography variant="h3">Zweck und Rechtsgrundlage</Typography>
      <Typography variant="p">
        Der Einsatz von Google Fonts erfolgt auf Grundlage Ihrer Einwilligung
        gemäß Art. 6 Abs. 1 lit. a. DSGVO und § 25 Abs. 1 TTDSG.
      </Typography>
      <Typography variant="p">
        Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des
        Europäischen Wirtschaftsraums, insbesondere die USA, zu übermitteln. In
        Fällen, in denen kein Angemessenheitsbeschluss der Europäischen
        Kommission existiert (z.B. in den USA) haben wir mit den Empfängern der
        Daten anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO
        vereinbart. Dies sind – sofern nicht anders angegeben –
        Standardvertragsklauseln der EU-Kommission gemäß Durchführungsbeschluss
        (EU) 2021/914 vom 4. Juni 2021. Eine Kopie dieser
        Standardvertragsklauseln können Sie{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE"
          className="text-primary underline"
        >
          hier{" "}
        </Link>{" "}
        einsehen.
      </Typography>
      <Typography variant="p">
        Zudem holen wir vor einem solchen Drittlandtransfer Ihre Einwilligung
        nach Art. 49 Abs. 1 Satz 1 lit. a. DSGVO ein, die Sie über die
        Einwilligung im Consent Manager (oder sonstigen Formularen,
        Registrierungen etc.) erteilen. Wir weisen Sie darauf hin, dass bei
        Drittlandübermittlungen im Detail unbekannte Risiken (z.B. die
        Datenverarbeitung durch Sicherheitsbehörden des Drittlandes, deren
        genauer Umfang und deren Folgen für Sie wir nicht kennen, auf die wir
        keinen Einfluss haben und von denen Sie unter Umständen keine Kenntnis
        erlangen) bestehen können.
      </Typography>
      <Typography variant="h3">Speicherdauer</Typography>
      <Typography variant="p">
        Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns
        beeinflussbar, sondern wird von Google Ireland Limited bestimmt. Weitere
        Hinweise finden Sie in der{" "}
        <Link
          href="https://policies.google.com/privacy"
          className="text-primary underline"
        >
          Datenschutzerklärung für Google Fonts{" "}
        </Link>
        .
      </Typography>

      <Typography variant="p">
        <small>
          Quelle: Datenschutz-Konfigurator von{" "}
          <Link
            href="https://www.mein-datenschutzbeauftragter.de"
            target="_blank"
          >
            Mein-Datenschutzbeauftragter.de
          </Link>
        </small>
      </Typography>
    </FullWidthWrapper>
  );
}

export default Page;
