import {
  IconChevronDown,
  IconBrandFacebook,
  IconBrandInstagram
} from "@tabler/icons-react";
import  Image  from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import {Link} from '~/navigation'
import Logo1 from '@public/sechan.png'

const HomePageHeader: React.FC = () => {
  const translation = useTranslations("Home.Header");

  return (
    <header className="relative min-h-[100vh] flex items-center">
      {/*<video
        className="absolute object-cover object-left top-0 left-0 w-full h-full z-0 pointer-events-none lg:object-center"
        autoPlay
        loop
        muted
      >
        <source
          src="/header-video.mp4"
          className="relative w-full h-full"
          type="video/mp4"
        />
      </video> */}
      <Image
        src="/clothes05-polina-tankilevitch.jpg"
        className="absolute object-cover object-left top-0 left-0 w-full h-full z-0 pointer-events-none lg:object-center"
        alt="BG"
        width={1920}
        height={1080}

      />
      <div className="absolute inset-0 bg-gray-100/60  backdrop-blur-sm sm:opacity-60"></div>
      <div id="main-logo" className="z-10 pt-16 flex flex-col p-5 gap-10 mx-auto w-full md:max-w-[700px] lg:p-0 lg:gap-5 lg:flex-row lg:items-center lg:justify-between lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <Image 
          src={Logo1.src}
          placeholder="blur"
          blurDataURL={Logo1.blurDataURL}
          width={1920}
          height={1080}
          className="max-h-[700px] max-w-[700px] mx-auto my-auto"
          alt="Logo Kopciuszek"/>
      </div>
      <div className="z-10 absolute bottom-5 w-full">
        <IconChevronDown
          size={40}
          className="mx-auto animate-bounce text-white/50 rounded-full bg-white/25 "
        />
      </div>
      <div className="fixed bottom-0 end-0  z-[100]  ">
      <div className="p-3 pl-0 flex flex-col ">
              <Link href='https://www.facebook.com/' className="cursor-pointer">
                <IconBrandFacebook className="cursor-pointer bg-primary text-white rounded-xl border border border-gray-600 m-2 w-[40px] h-[40px] shadow-md"/> 
              </Link>
              <Link href='https://www.instagram.com/' className="curson-pointer">
                <IconBrandInstagram className="cursor-pointer bg-primary text-white rounded-xl border border border-gray-600 m-2 w-[40px] h-[40px] shadow-md"/>
              </Link>
          </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
