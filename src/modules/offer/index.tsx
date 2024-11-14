import React from "react";
import OfferPageList from "./elements/intro";
import OfferPageLearnMore from './elements/about'
import OfferPageGallery from './elements/gallery'

const AboutPage: React.FC = () => {

  const prepareArray = (count:number) =>{
    let tmp = []
    for(let i=1; i<=count;i++)
    {
      tmp.push(`Description${i}`)
    }
    return tmp
  }
  const descriptions = prepareArray(7)
  return (
    <>
      <OfferPageList descriptions={descriptions} />
      <OfferPageLearnMore/>
      <OfferPageGallery/>
    </>
  );
};

export default AboutPage;
