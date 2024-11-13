import Image from "next/image";
import React from "react";

import { cn, getStrapiFileUrl } from "~/lib/utils";

import BrandLogo from "@public/sechan.png";

type Props = {
  url: string | undefined;
  alt: string;
  width: number;
  height: number;
  strapiUrl: string | undefined;
  s3Url: string | undefined;
  className?: string;
  errorClassName?: string;
};

const ThumbnailImage: React.FC<Props> = (props: Props) => {
  const {
    url,
    alt,
    width,
    height,
    strapiUrl,
    s3Url,
    className,
    errorClassName,
  } = props;

  if (!url) {
    return (
      <div
        className={cn(
          "w-full h-[250px] rounded-t-lg bg-gray-200 flex justify-center items-center",
          errorClassName
        )}
      >
        <Image
          src={BrandLogo.src}
          alt="Logo"
          width={BrandLogo.width}
          height={BrandLogo.height}
          placeholder="blur"
          blurDataURL={BrandLogo.blurDataURL}
          className="w-12 h-12 opacity-80"
        />
      </div>
    );
  }

  return (
    <Image
      // strapi url env not needed if it is aws provider
      src={getStrapiFileUrl(url, strapiUrl, s3Url)}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "w-full object-cover object-top h-[250px] rounded-t-lg",
        className
      )}
    />
  );
};

export default ThumbnailImage;
