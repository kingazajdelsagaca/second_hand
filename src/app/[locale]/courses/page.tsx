import { Metadata, NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { RetrieveWorkshopsPage } from "~/lib/actions";
import CoursesPage from "~/modules/courses/";

type Props = {
  params: {
    locale: string;
  };
};

const Page: NextPage<Props> = async (props) => {
  const { params } = props;
  unstable_setRequestLocale(params.locale);

  const contentData = await RetrieveWorkshopsPage(params.locale);

  return <CoursesPage data={contentData.response?.data} />;
};

export default Page;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;

  if (params.locale === "pl") {
    return {
      title: "Kopciuszek",
      description: "Dowiedz się więcej o moich warsztatach",
      keywords:
        "Niehipnotyczny seans regresyjny, Niehipnotyczny seans reinkarnacyjny,Podróż szamańska, Regresja, szamanizm, Medycyna energetyczna, Usuwanie blokad, lęków, traum, fobii, klątw, karmicznych powikłań międzyludzkich, Uzdrawianie energia, Rytualy uzdrawiajace ",
      robots: "index, follow",
    };
  }

  return {
    title: "Arnia - Workshops",
    description: "Erfahren Sie mehr über meine Workshops",
    keywords:
      "Nicht-hypnotische Regressionssitzung, Nicht-hypnotische Reinkarnationssitzung, Schamanische Reise, Regression, Schamanismus, Energiemedizin, Blockaden lösen, Ängste, Traumata, Phobien, Flüche, karmische zwischenmenschliche Verwicklungen, Heilung durch Energie, Heilungsrituale",
    robots: "index, follow",
  };
}
