import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import ContactPageFormComponent from "../components/form";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

type Props = {
  locale: string;
};

const ContactPageHeader: React.FC<Props> = (props) => {
  const { locale } = props;
  const translation = useTranslations("Contact.Header");
  const formTranslation = useTranslations("Contact-Form");

  return (
    <header className="relative min-h-[calc(100vh-85px-200px)] pt-6 pb-12 space-y-5 flex justify-center items-center lg:pt-24">
      <div className="flex flex-col p-5 gap-10 mx-auto w-full md:max-w-[500px] lg:p-0 lg:gap-5 lg:flex-row lg:items-center lg:justify-between lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <div className="lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]">
          <h1 className="font-outfit text-center mb-4 font-bold text-black text-3xl md:text-4xl lg:text-left xl:text-5xl">
            {translation("Title")}
          </h1>
          <p className="text-black text-center [&>a]:underline [&>a]:underline-offset-2 [&>a]:font-medium [&>a]:text-primary md:text-lg lg:text-left">
            {locale === "pl" ? (
              <>
                W celu kontaktu ze sklepem prosimy o wypełnienie naszego formularza.{" "}
                <br />
                Możesz się również skontaktować z&nbsp;nami drogą mailową:{" "}
                <Link href="mailto:sklep@kopciuszek.pl">sklep@kopciuszek.pl</Link>
                .<br />W celu bezpośredniego kontaktu telefonicznego dzwoń pod
                numer: <Link href="tel:+48555666777">+48&nbsp;555&nbsp;666&nbsp;777</Link>.
                <br />
                  {/* {translation('Address')}. {translation('Hours') }
                   Adres: Ul. Rydla 6, Krakow. Przyjmuję od pn-sob w godzinach 10-19*/
                  }
                  Adres: ul. Kasztanowa 6, Kraków. Zapraszamy od&nbsp;poniedziałku do&nbsp;soboty w&nbsp;godzinach 9&#8209;20.
                <br />
                <strong>{
                  // translation('Sign')
                  // Zapisz się już teraz
                  }
                  Skontaktuj się z nami
                </strong>
              </>
            ) : 
            locale === "de" ? 
            (
              <>
                Um uns zu kontaktieren, füllen Sie bitte unser Formular aus.<br />
                Sie können uns auch per E-Mail kontaktieren:{" "}
                <Link href="mailto:sklep@kopciuszek.pl">sklep@kopciuszek.pl</Link>
                . <br />
                For direct phone contact, call:{" "}
                <Link href="Tel:+48555666777">+48&nbsp;555&nbsp;666&nbsp;777</Link>.               
                <br />
                  {/* {translation('Address')}. {translation('Hours')} */}
                  Adresse: Ul. Kasztanowa 6, Krakau. Wir haben Mo-Sa von 9 bis 20 Uhr geöffnet.
                <br />
                <strong>
                  {/* {translation('Sign')} */}
                  Kontaktieren Sie uns
                </strong>
              </>
            ):
            (
              <>
                To contact us, please fill out our form. <br />
                You can also contact us via email:{" "}
                <Link href="mailto:sklep@kopciuszek.pl">sklep@kopciuszek.pl</Link>. <br />
                For direct phone contact, call:{" "}
                <Link href="tel:+48555666777">+48&nbsp;555&nbsp;666&nbsp;777</Link>.              
                <br />
                  {/* {translation('Address')}. {translation('Hours')} */}
                  Address: 6 Kasztanowa Street, Krakow. We invite you from Monday to Saturday from 9&nbsp;am to 8&nbsp;pm.
                <br />
                <strong>
                  {/* {translation('Sign')} */}
                  Contact us
                </strong>
              </>
            )
          }
          </p>
          <div className="p-6 pl-0 flex flex-row">
              <Link href='https://www.facebook.com/'><IconBrandFacebook className="bg-primary text-white rounded-lg border border-2 border-primary m-2 w-[40px] h-[40px]"/> </Link>
              <Link href='https://www.instagram.com/'><IconBrandInstagram className="bg-primary text-white rounded-md border border-2 border-primary m-2 w-[40px] h-[40px]"/> </Link>
          </div>
        </div>
        <div className="space-y-2 lg:w-[400px]">
          <h2 className="mt-1 font-outfit text-center font-semibold text-black text-2xl md:text-2xl lg:text-left">
            {locale === "pl" ? "Formularz Kontaktowy" : locale === "de" ? "Kontaktformular" : "Contact Form"}
          </h2>
          <ContactPageFormComponent
            locale={locale}
            translations={{
              // name: formTranslation("Name"),
              // email: formTranslation("Email"),
              // message: formTranslation("Message"),
              // send: formTranslation("Send"),
              name: locale === "pl" ? "Imię i nazwisko" : locale === "de" ? "Vor- und Nachname" : "First and Last Name",
              email: locale === "pl" ? "Adres email" : locale === "de" ? "E-Mail-Adresse" : "Email address",
              message: locale === "pl" ? "Wiadomość" : locale === "de" ? "Nachricht" : "Message",
              send: locale === "pl" ? "Wyślij" : locale === "de" ? "Schicken" : "Send",
            }}
            dark
          />
        </div>
      </div>
    </header>
  );
};

export default ContactPageHeader;
