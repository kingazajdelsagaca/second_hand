import { Metadata, NextPage, ResolvingMetadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { RetrieveBlog } from "~/lib/actions";
import { getStrapiFileUrl, shortenDescription } from "~/lib/utils";
import SelectedNewBlog from "~/modules/new-blogs/SelectedBlog";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

const Page: NextPage<Props> = async (props) => {
  const { params } = props;
  unstable_setRequestLocale(params.locale);
  const blogData = await RetrieveBlog(Number(params.id), params.locale);

  if (!blogData) {
    if(params.locale === "pl"){
      return <p>Nie znaleziono</p>;
    }
    else if(params.locale === "de"){
      return <p>Nicht gefunden</p>;
    }
    else{
      return <p>Not found</p>;
    }
  }

  return (
    <SelectedNewBlog
      strapiUrl={process.env.STRAPI_URL}
      s3Url={process.env.S3_DOMAIN}
      blog={blogData.response?.data}
      error={blogData.error}
      message={blogData.message}
    />
  );
};

export default Page;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blogData = await RetrieveBlog(Number(params.id), params.locale);

  if (blogData && blogData.response) {
    const strapiUrl = process.env.STRAPI_URL;
    const s3Url = process.env.S3_DOMAIN;
    const { Tytul, Opis, Miniaturka } = blogData.response.data?.attributes;

    return {
      title: Tytul,
      description: shortenDescription(Opis, 2),
      openGraph: {
        images: [
          getStrapiFileUrl(Miniaturka.data?.attributes?.url, strapiUrl, s3Url),
        ],
      },
    };
  }

  return {};
}
