import React from "react";
import HomePageLearnMore from "./elements/about";
import HomePageContact from "./elements/contact";
import HomePageHeader from "./elements/header";
import HomePageQuote from "./elements/quote";
import HomePageInfo from './elements/info'
import HomePageIntro from "./elements/intro";

type Props = {
  locale: string;
};

const HomePage: React.FC<Props> = (props) => {
  const { locale } = props;

  return (
    <>
      <HomePageHeader />
      <HomePageIntro/>
      <HomePageQuote author="Orlando Bloom"/>
      <HomePageInfo locale={locale}/>
      <HomePageContact locale={locale} />
      <HomePageLearnMore />
    </>
  );
};

export default HomePage;
