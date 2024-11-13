import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import ContactPageFormComponent from "~/modules/contact/components/form";
import { Montserrat } from "next/font/google";

type Props = {
  author?: string;
};

const oleo = Montserrat({weight: '400', subsets: ['latin-ext','latin']})

const HomePageQuote: React.FC<Props> = (props) => {
  const { author } = props;
  const translation = useTranslations("About");


  return (
    <section className="relative py-4 h-[300px] bg-origin-border">
      <div
        className="absolute top-0 left-0 h-full w-full clip -z-10 flex items-center justify-center"
        style={{
          clipPath: "inset(0 0 0 0)",
          backgroundImage: `url(${"miscelaneous02-beyzaa-yurtkuran.jpg"})`,
          backgroundSize: "cover",
        }}
      >
        <h3 className="py-6 font-outfit text-white text-2xl sm:text-3xl lg:text-3xl block">
            <q className={oleo.className+" block text-center font-medium px-5 max-w-[1000px]"}>
              {/*translation('Quote')*/}
              We owe it to our children to be better stewards of the environment.
              </q>
            <span className="font-normal float-end mr-3 mt-8">{author}</span>
        </h3>
      </div>
     
    </section>
  );
};

export default HomePageQuote;
