import { Metadata, NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { RetrieveArticles } from "~/lib/actions";
import ArticlesPage from "~/modules/articles";

type Props = {
  params: {
    locale: string;
  };
  searchParams: {
    page: number;
  };
};

const Page: NextPage<Props> = async (props) => {
  const { params, searchParams } = props;
  const page = searchParams.page - 1 || 0;
  unstable_setRequestLocale(params.locale);
  const strapiArticlesData = await RetrieveArticles(params.locale, page + 1);

  return (
    <ArticlesPage
      strapiUrl={process.env.STRAPI_URL}
      s3Url={process.env.S3_DOMAIN}
      articles={strapiArticlesData.response?.data}
      articlesCount={strapiArticlesData.response?.meta.pagination.total || 0}
      page={page}
      error={strapiArticlesData.error}
      message={strapiArticlesData.message}
    />
  );
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
