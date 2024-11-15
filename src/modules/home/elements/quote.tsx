import Image from "next/image";
import React from "react";
import CodingImage from "@public/coding.jpg";
import { useTranslations } from "next-intl";
import ContactPageFormComponent from "~/modules/contact/components/form";
import { Montserrat } from "next/font/google";

type Props = {
  author?: string;
};

const oleo = Montserrat({weight: '400', subsets: ['latin-ext','latin']})

const ServicesForgivenessPageQuote: React.FC<Props> = (props) => {
  const { author } = props;
  const translation = useTranslations("Home.Quote");
  const formTranslation = useTranslations("Contact-Form");

  return (
    <section className="relative py-4 h-[300px] bg-origin-border">
      <div
        className="absolute bg-quote-main top-0 left-0 h-full w-full clip -z-10 flex items-center justify-center"
        style={{
          clipPath: "inset(0 0 0 0)",
          // backgroundImage: `url(${"clothes04-mdsnmdsnmdsn.jpg"})`,
          backgroundSize: "cover",
        }}
      >
        <h3 className="py-6 font-outfit text-black text-2xl sm:text-3xl lg:text-3xl block">
            <q className={oleo.className+" block text-center font-medium px-5 max-w-[1000px]"}>
              {/*translation('Main')*/}
              The best way to look stylish on a budget is to try second-hand, bargain hunting, and vintage.
              </q>
            <span className="font-normal float-end mr-3 mt-8">{author}</span>
        </h3>
      </div>
     
    </section>
  );
};

export default ServicesForgivenessPageQuote;
