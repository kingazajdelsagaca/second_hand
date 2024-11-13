import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import LayoutSection from "~/layout/section";

type props = {
  descriptions: string[];
};

const HomePageIntro = (props: props) => {
  const translation = useTranslations("Education");

  return (
    <>
      <LayoutSection
        title={translation("Title")}
        sectionClassName="py-12 pb-20"
      >
        <p className="px-5 text-center  text-black/80 mx-auto text-base lg:text-lg lg:max-w-xl xl:max-w-3xl">
          {translation("Intro")}
        </p>
      </LayoutSection>
      <div className="relative sm:min-h-[724px]  min-h-[calc(100vh-85px-200px)] py-6 space-y-5 flex justify-center items-center lg:py-8 bg-primary">
      <div className="relative w-full flex flex-col gap-10 md:max-w-[700px]  lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
          <div className="flex flex-col p-5 gap-10 mx-auto w-full lg:p-0 lg:gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[768px] p-6 text-justify">
              <h1 className="font-outfit text-center mt-0 mb-8 font-bold text-white text-3xl md:text-4xl lg:text-left xl:text-5xl">
                {translation("Title")}
              </h1>
              <ul className="text-white text-center text-base md:text-lg lg:text-justify pr-8">
                {props.descriptions.map((value, key) => (
                  <li key={key}>{translation(value)}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2 flex justify-between lg:justify-end ml-auto">
              <Image
                src="/photo.jpg"
                alt="Beata Kulak"
                className="h-[544px]"
                width={1041}
                height={927}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageIntro;
