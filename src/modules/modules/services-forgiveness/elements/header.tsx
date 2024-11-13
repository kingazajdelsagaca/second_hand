import Image from "next/image";
import React from "react";
import HeaderImage from '@public/seans.jpg'

import { useTranslations } from "next-intl";

const ServicesForgivenessPageHeader: React.FC = () => {
  const translation = useTranslations("Forgiveness.Header");

  return (
    <header className="relative min-h-[600px] pt-6 space-y-5 flex justify-center items-center lg:py-12 lg:mt-12  bg-primary mb-12">
      <div className="relative w-full flex flex-col gap-10 md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px] px-8">
        <div className="flex flex-col p-5 gap-10 mx-auto w-full lg:p-0 lg:gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]">
            <h1 className="font-outfit text-center font-bold mb-4 text-white text-3xl md:text-4xl lg:text-left xl:text-5xl">
              {translation("Title")}
            </h1>
            <p className="mt-4 text-white text-center text-base md:text-lg lg:text-justify">
              {translation("Description")}
            </p>
          </div>
          <div className="space-y-2 lg:w-[400px] xl:w-[500px] 2xl:w-[550px]">
            <Image
              src={HeaderImage.src}
              alt="Ecommerce"
              className="rounded-xl lg:w-[400px] xl:w-[500px] 2xl:w-[550px] lg:h-[400px] xl:h-[500px] 2xl:h-[550px]"
              placeholder="blur"
              blurDataURL={HeaderImage.blurDataURL}
              width={HeaderImage.width}
              height={HeaderImage.height}
            />
          </div>
        </div>
        </div>
    </header>
  );
};

export default ServicesForgivenessPageHeader;
