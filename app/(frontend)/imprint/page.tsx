import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact';
import FullWidthWrapper from '@/components/full-width-wrapper';
import Typography from '@/components/typography';
import { Button, buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Rechtliche Hinweise und Impressum der Praxis für Osteopathie, Dentosophie, Yoga & Qigong – Maitri Katrin Eulitz.',
  robots: {
    index: true,
    follow: true,
  },
};

function Page() {
  return (
    <FullWidthWrapper>
      <div className="flex-col space-y-3 pt-25">
        <Typography className="m-5" variant="h1">
          Impressum
        </Typography>
        <div className="md:px-20 lg:px-36">
          <Typography variant="h2">Angaben gemäß § 5 TMG:</Typography>

          <Typography variant="p">
            Praxis für Osteopathie, Yoga & Qigong <br />
            Maitri Katrin Eulitz <br /> Gartenstraße 13 <br /> 01445 Radebeul{' '}
            <br />
            Deutschland
          </Typography>

          <Typography variant="h2">Kontakt:</Typography>
          <Typography variant="p">
            Telefon:{' '}
            <Link
              className={buttonVariants({ variant: 'link' })}
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            >
              (+49)-172-79-79-178
            </Link>
            <br />
            E-Mail:{' '}
            <ContactForm>
              <Button
                aria-controls="contactFormDialog"
                aria-haspopup="dialog"
                className="select-none"
                variant="link"
              >
                info(at)osteopathie-radebeul.de
              </Button>
            </ContactForm>
          </Typography>
          <Typography variant="h2">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:{' '}
          </Typography>
          <Typography variant="p">
            Maitri Katrin Eulitz <br /> Gartenstraße 13 <br />
            01445 Radebeul
          </Typography>
          <Typography variant="h2">Streitschlichtung</Typography>
          <Typography variant="p">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </Typography>

          <Typography variant="h2">Haftung für Inhalte </Typography>
          <Typography variant="p">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
            <br />
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </Typography>
          <Typography variant="h2">Haftung für Links</Typography>
          <Typography variant="p">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
            <br />
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </Typography>

          <Typography variant="h2">Urheberrecht</Typography>
          <Typography variant="p">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
            <br />
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </Typography>
          <Typography variant="h2">Datenschutz</Typography>
          <Typography variant="p">
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
            <br />
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
            <br />
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit
            ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
            von Werbeinformationen, etwa durch Spam-Mails, vor.
          </Typography>
        </div>
      </div>
    </FullWidthWrapper>
  );
}

export default Page;
