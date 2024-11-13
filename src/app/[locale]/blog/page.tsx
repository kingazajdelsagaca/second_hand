import { Metadata, NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { RetrieveBlogs } from "~/lib/actions";
import NewBlog from "~/modules/new-blogs/NewBlog";

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
  const strapiBlogsData = await RetrieveBlogs(params.locale, page + 1);

  return (
    <NewBlog
      strapiUrl={process.env.STRAPI_URL}
      s3Url={process.env.S3_DOMAIN}
      blogs={strapiBlogsData.response?.data}
      blogsCount={strapiBlogsData.response?.meta.pagination.total || 0}
      page={page}
      error={strapiBlogsData.error}
      message={strapiBlogsData.message}
    />
  );
};

export default Page;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;

  if (params.locale === "pl") {
    return {
      title: "Kopciuszek – blog",
      description: "Przeczytaj nasze najnowsze wpisy",
      keywords:
        "second hand, ubrania, moda, buty, eko",
      robots: "index, follow",
    };
  }

  else if(params.locale === "de") {
    return {
      title: "Kopciuszek – Blog",
      description: "Lesen Sie meine neuesten Blogs",
      keywords:
        "Second Hand, Kleidung, Mode, Schuhe, Öko",
      robots: "index, follow",
    };
  }

  else{
    return {
      title: "Kopciuszek – blog",
      description: "Read our latest posts",
      keywords:
        "second hand, clothes, fashion, shoes, eco",
      robots: "index, follow",
  };}
}
