import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import ContactPageFormComponent from "~/modules/contact/components/form";

type Props = {
  locale: string;
};

const HomePageContact: React.FC<Props> = (props) => {
  const { locale } = props;

  const translation = useTranslations("Home.Contact");
  const formTranslation = useTranslations("Contact-Form");

  return (
    <section className="relative py-4 h-[500px] bg-origin-border bg-gray-800 bg-opacity-25">
      <div
        className="absolute top-0 left-0 h-full w-full clip -z-10"
        style={{
          clipPath: "inset(0 0 0 0)",
        }}
      >
        <div className="fixed w-full h-full left-0 top-0">
          <Image
            src='/clothes01-cottonbro.jpg'
            alt="Coding Background"
            className="w-full h-full object-cover object-center"
            fill
          />
        </div>
      </div>
      <h3 className="py-6 text-center font-outfit font-semibold text-white text-2xl sm:text-3xl lg:text-3xl">
        {
          // translation("Title")
          locale === "pl" ? "Kontakt" : locale === "de" ? "Kontakt" : "Contact"
        }
      </h3>
      <div className="p-5">
        <ContactPageFormComponent
          locale={locale}
          className="md:max-w-[700px]"
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
        />
      </div>
    </section>
  );
};

export default HomePageContact;
