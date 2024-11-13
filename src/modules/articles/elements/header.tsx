import {
  IconChevronDown,
  IconSparkles} from "@tabler/icons-react";
import  Image  from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import Link from "next/link";
import Logo1 from '@public/logo-lg v1-male .png'
import Logo2 from '@public/logo-lg v2-male .png'
import Logo3 from '@public/logo-lg v1-duze .png'
import Logo4 from '@public/logo-lg v2-duze .png'

const HomePageHeader: React.FC = () => {
  //const translation = useTranslations("Articles");

  return (
    <header className="relative flex items-center h-[100vh]">
      <video
        autoPlay
        loop
        muted
         className="absolute object-cover object-left top-0 left-0 w-full h-full z-0 pointer-events-none lg:object-center h-[100vh] w-100 blur-sm"
      >
        <source
          src="/articles.mp4"
          className="relative"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gray-100/60  backdrop-blur-sm sm:opacity-60"></div>
      <div id="main-logo" className="z-10 pt-16 flex flex-col p-5 gap-10 mx-auto w-full md:max-w-[700px] lg:p-0 lg:gap-5 lg:flex-row lg:items-center lg:justify-between lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <Image 
          src={Logo1.src}
          placeholder="blur"
          blurDataURL={Logo1.blurDataURL}
          width={1920}
          height={1080}
          className="max-h-[700px] max-w-[700px] mx-auto my-auto "
          alt="Logo arnia"/> 
      </div>
    </header>
  );
};

export default HomePageHeader;
