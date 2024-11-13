import { Metadata, NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import ServicesForgiveness from "~/modules/services-forgiveness";

type Props = {
  params: {
    locale: string;
  };
};

const Page: NextPage<Props> = (props) => {
  const { params } = props;
  unstable_setRequestLocale(params.locale);

  return <ServicesForgiveness />;
};

export default Page;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;

  if (params.locale === "pl") {
    return {
      title: "Arnia - Uzdrawianie duchowe",
      description: "Dowiedz się więcej o uzdrawianiu duchowym",
      keywords:
        "Niehipnotyczny seans regresyjny, Niehipnotyczny seans reinkarnacyjny,Podróż szamańska, Regresja, szamanizm, Medycyna energetyczna, Usuwanie blokad, lęków, traum, fobii, klątw, karmicznych powikłań międzyludzkich, Uzdrawianie energia, Rytualy uzdrawiajace ",
      robots: "index, follow",
    };
  }

  return {
    title: "Arnia - Spiritual healing",
    description: "",
    keywords: "",
    robots: "index, follow",
  };
}
