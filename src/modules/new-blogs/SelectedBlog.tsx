"use client";

import { useEffect } from "react";
import ThumbnailImage from "~/layout/thumbnail-image";
import { StrapiBlogType } from "~/lib/actions";

type Props = {
  strapiUrl: string | undefined;
  s3Url: string | undefined;
  blog: StrapiBlogType | undefined;
  error: boolean;
  message: string;
};

const SelectedNewBlog: React.FC<Props> = (props) => {
  const { strapiUrl, s3Url, blog, error, message } = props;

  useEffect(() => {
    if (error) {
      console.error(message || "Unknown error");
    }
  }, [error, message]);

  if (error || !blog) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-85px-200px)]">
        <p className="font-semibold">Nie udało się wczytać bloga</p>
      </div>
    );
  }

  const { Tytul, Opis, Miniaturka, publishedAt } = blog?.attributes;
  const thumbnailData = Miniaturka.data?.attributes;

  return (
    <div className="min-h-[calc(100vh-85px-200px)]">
      <div className="relative mx-auto w-full px-5 md:px-0 md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <hr className="mb-4" />
        {thumbnailData && (
          <ThumbnailImage
            url={thumbnailData?.url}
            alt={Tytul}
            width={thumbnailData?.width}
            height={thumbnailData?.height}
            s3Url={s3Url}
            strapiUrl={strapiUrl}
            className="rounded-lg sm:h-[350px] lg:h-[400px] xl:h-[475px] 2xl:h-[550px]"
          />
        )}
        <div className="mt-5 mb-2 lg:my-5">
          <p className="font-medium text-sm text-gray-500">
            {new Date(publishedAt).toLocaleString("pl")}
          </p>
          <h2 className="font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
            {Tytul}
          </h2>
        </div>
        <p className="mb-10 lg:text-lg xl:text-xl">{Opis}</p>
      </div>
    </div>
  );
};

export default SelectedNewBlog;
