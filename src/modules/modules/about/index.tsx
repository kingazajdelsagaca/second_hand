import React from "react";
import AboutPageHeader from "./elements/header";
import HomePageInfo from "./elements/info";
import HomePageIntro from "./elements/intro";
import AboutPageQuote from './elements/quote'

const AboutPage: React.FC = () => {

  const prepareArray = (count:number) =>{
    let tmp = []
    for(let i=1; i<=count;i++)
    {
      tmp.push(`Description${i}`)
    }
    return tmp
  }
  const descriptions = prepareArray(10)
  return (
    <>
      <HomePageIntro />
      <AboutPageHeader />
      <div className="p-8 mt-12">
      <HomePageInfo content="Description-me2"/>
      </div>
      <AboutPageQuote author="Pierce Brosnan" />
      <div className="p-8 mt-12">
        {descriptions.map((content,idx)=>(<HomePageInfo key={idx} title={idx===1? "Title2": ""} content={content} />))}
      </div>
    </>
  );
};

export default AboutPage;
