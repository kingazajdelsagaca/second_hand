import { useTranslations } from "next-intl";
import React from "react";
import LayoutSection from "~/layout/section";

const HomePageIntro: React.FC = () => {
  const translation = useTranslations("About");

  return (
    <LayoutSection title="Kopciuszek"
    /*{translation("Title") O mnie}*/
     sectionClassName="py-12 pb-20">
      <p className="px-5 text-center  text-black/80 mx-auto text-base lg:text-lg lg:max-w-xl xl:max-w-3xl">
      {/*translation("Intro") Nazywam się */}
        Sklep z&nbsp;odzieżą używaną "Kopciuszek" to&nbsp;mała rodzinna działalność. Historia tego miejsca sięga roku 2012, 
          kiedy to&nbsp;w&nbsp;naszych głowach pojawiło się pytanie, jak możemy pomóc ludziom i&nbsp;planecie. 
          Postanowiliśmy połączyć te&nbsp;dwa pragnienia i&nbsp;tak powstał nasz sklep. Wierzymy, że&nbsp;każdy ma&nbsp;wpływ 
          na&nbsp;rzeczywistość, w&nbsp;której żyje.
      </p>
    </LayoutSection>
  );
};

export default HomePageIntro
