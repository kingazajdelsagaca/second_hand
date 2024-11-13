import React from "react";
import ContactPageHeader from "./elements/header";

type Props = {
  locale: string;
};

const ContactPage: React.FC<Props> = (props) => {
  const { locale } = props;

  return (
    <>
      <ContactPageHeader locale={locale} />
    </>
  );
};

export default ContactPage;
