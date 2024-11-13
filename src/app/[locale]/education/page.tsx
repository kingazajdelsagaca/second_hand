import { Metadata, NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import EducationPage from "~/modules/education/";

type Props = {
  params: {
    locale: string;
  };
};

const Page: NextPage<Props> = (props) => {
  const { params } = props;
  unstable_setRequestLocale(params.locale);

  return <EducationPage />;
};

export default Page;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;

  if (params.locale === "pl") {
    return {
      title: "Kopciuszek – kontakt",
      description: "Skontaktuj się ze mną",
      keywords:
        "second hand, ubrania, moda, buty, eko",
      robots: "index, follow",
    };
  }
  else if(params.locale === "de") {
    return {
      title: "Kopciuszek – Kontakt",
      description: "Kontaktieren Sie mich",
      keywords:
        "Second Hand, Kleidung, Mode, Schuhe, Öko",
      robots: "index, follow",
    };
  }
  else {
    return {
      title: "Kopciuszek – Contact",
      description: "Contact me",
      keywords: "second hand, clothes, fashion, shoes, eco",
      robots: "index, follow", 
    };
  }
}
