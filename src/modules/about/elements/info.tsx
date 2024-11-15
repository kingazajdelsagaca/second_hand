import { useTranslations } from "next-intl";
import React from "react";


type props = {
    title?: string
    content: string|string[]
}

const HomePageInfo = (props:props) => {
  const translation = useTranslations("About");
  const {title,content} = props
  return ( <>
    {title?<div className="relative  pt-6 pb-6 space-y-5 flex justify-center flex-column items-center lg:pt-3">            
    
        <h3 className="text-center py-6 font-outfit font-semibold text-2xl sm:text-3xl lg:text-3xl">
          {/*translation(title) Przebieg drogi mojego rozwoju duchowego*/}
          Dlaczego second hand jest eko?
          </h3> 
    </div>
    : <></>}
    <div className="relative  pt-4 pb-4 space-y-5 flex justify-center flex-column items-center ">
        <div className="relative w-full flex flex-col gap-10 md:max-w-[700px]  lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
          <div className="flex flex-col p-3 gap-10 mx-auto w-full lg:p-0 lg:gap-5 lg:flex-row lg:items-center lg:justify-between  lg:px-6">
            <p className="text-black text-center text-base md:text-lg lg:text-justify">
              {/*translation(content) 
              Czerwcu 2005 roku doznałam pierwszą podróż astralną, w której spotkałam zmarłego dziadka.*/}
              {translation(content)}
              {/* https://www.auchan.pl/pl/blog/eco-strefa/rzeczy-z-drugiej-reki-i-odziez-uzywana-czy-ich-kupowanie-jest-eko */}
              {/* abc<br/>
              def<br/>
              ghi<br/>
              jkl<br/>
            </p>
            <p>xxxxxxx<br/>zzzzzzzz</p>
            <p>aaaa<br/>bbbbb */}
            </p>
          </div>
      </div>
    </div>
    </>);
};

export default HomePageInfo;
