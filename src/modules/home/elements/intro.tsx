import { IconHeart,  IconCoins } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";
import LayoutSection from "~/layout/section";
import HomePageServiceComponent from "../components/service";
import { Dosis } from "next/font/google";
const amita = Dosis({
  weight: '400',
  subsets: ['latin','latin-ext']
})

const HomePageIntro: React.FC = () => {
  const translation = useTranslations("Home.Introduction");

  return (
    <LayoutSection title={""} className={`mb-8 p-5`}>
      <h3 className={` ${amita.className} px-6 pb-5 text-center font-outfit font-semibold text-2xl sm:text-3xl lg:text-3xl`}>
        {/*translation('Title')
        Witam Cię serdecznie na mojej stronie*/}
        Witamy na&nbsp;stronie naszego sklepu</h3>
       <p className={` ${amita.className} px-5 text-center  text-black/80 mx-auto text-base lg:text-lg lg:max-w-xl xl:max-w-3xl mb-8`}>
        {//translation("Description")
        // Cieszę się, że mnie znalazłeś, bo: „Kto szuka, ten znajdzie”, prawdopodobnie zmagasz się z czymś, być może jesteś już tego świadomy, a może jeszcze nie.          
          /*locale === "pl" ? 
          <>Cieszymy z&nbsp;Twojej wizyty na&nbsp;naszej stronie.<br/>Mamy nadzieję, że&nbsp;znajdziesz tu to, czego szukasz.</> 
          : locale === "de" ? 
          <>Wir freuen uns über Ihren Besuch auf unserer Website.<br />Wir hoffen, dass Sie hier finden, was Sie suchen.</> 
          : <>We are pleased with your visit to our website.<br/>We hope you find what you are looking for here.</>
         */
        }
        Cieszymy z&nbsp;Twojej wizyty na&nbsp;naszej stronie.<br/>Mamy nadzieję, że&nbsp;znajdziesz tu to, czego szukasz.
      </p>

      <div className="flex flex-col px-5 gap-1 py-5 md:justify-center md:flex-row md:flex-wrap lg:justify-between lg:px-0">
        <HomePageServiceComponent
          icon={<IconHeart size={48} className="text-green-500" />}
          /*title={translation("1.Title")}
          description={translation("1.Description")}*/
          title="To jest eko!"
          description="Dając drugie życie odzieży, ograniczasz uwalnianie zanieczyszczeń i&nbsp;pomagasz chronić planetę!"
          className="bg-slate-50"
        />
        {/*<HomePageServiceComponent
          icon={<IconCrystalBall size={48} className="text-orange-500" />}
          title={translation("2.Title")}
          description={translation("2.Description")}
          className="bg-slate-50"
        />
        */}
        <HomePageServiceComponent
          icon={<IconCoins size={48} className="text-blue-500" />}
          /*title={translation("1.Title")}
          description={translation("1.Description")}*/
          title="Oszczędzanie"
          description="Rzeczy z&nbsp;drugiej ręki nie&nbsp;muszą być w&nbsp;złym stanie, a&nbsp;zdecydowanie są&nbsp;tańsze."
          className="bg-slate-50"
        />
      </div>
    </LayoutSection>
  );
};

export default HomePageIntro;
