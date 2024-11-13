"use client";

import ThumbnailImage from "~/layout/thumbnail-image";
import { StrapiArticleType } from "~/lib/actions";
import { getStrapiFileUrl } from "~/lib/utils";
import { Link } from "~/navigation";
import { Button } from "~/ui/button";

type Props = StrapiArticleType & {
  strapiUrl: string | undefined;
  s3Url: string | undefined;
};

const ArticleComponent: React.FC<Props> = (props) => {
  const { attributes, strapiUrl, s3Url } = props;
  const { Tytul, Opis, Miniaturka, Plik, publishedAt } = attributes;
  const thumbnailData = Miniaturka.data?.attributes;
  const fileData = Plik.data?.attributes;

  return (
    <div className="border rounded-lg shadow-sm">
      <ThumbnailImage
        url={thumbnailData?.url}
        alt={Tytul}
        width={thumbnailData?.width}
        height={thumbnailData?.height}
        s3Url={s3Url}
        strapiUrl={strapiUrl}
      />
      <div className="p-2">
        <p className="font-medium text-xs text-gray-500">
          {new Date(publishedAt).toLocaleString("pl")}
        </p>
        <h2 className="font-bold text-lg lg:text-xl">{Tytul}</h2>
        <p className="text-sm line-clamp-3">{Opis}</p>
        <Link
          href={getStrapiFileUrl(fileData.url ?? "/", strapiUrl, s3Url)}
          target="_blank"
        >
          <Button size="sm" className="mt-2" disabled={!fileData.url}>
            Przeczytaj
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleComponent;
