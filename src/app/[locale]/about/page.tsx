import { Metadata, NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import AboutPage from "~/modules/about";

type Props = {
  params: {
    locale: string;
  };
};

const Page: NextPage<Props> = (props) => {
  const { params } = props;
  unstable_setRequestLocale(params.locale);

  return <AboutPage />;
};

export default Page;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;

  if (params.locale === "pl") {
    return {
      title: "Kopciuszek second hand",
      description: "Sklep z odzieżą używaną Kopciuszek",
      keywords:
        "second hand, ubrania, moda, buty, eko",
      robots: "index, follow",
    };
  }

  else if(params.locale === "de") {
    return {
      title: "Kopciuszek second hand",
      description: "Second-Hand-Bekleidungsgeschäft",
      keywords:
        "second hand, ubrania, moda, buty, eko",
      robots: "index, follow",
    };
  }

  else{
    return {
      title: "Kopciuszek second hand",
      description: "Second hand clothing store",
      keywords: "second hand, clothes, fashion, shoes, eco",
      robots: "index, follow",
    };
  }
}
