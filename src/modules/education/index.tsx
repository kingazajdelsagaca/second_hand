import React from "react";
import EducationPageList from "./elements/intro";
import EducationPageLearnMore from './elements/about'
import EducationPageGallery from './elements/gallery'

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
      <EducationPageList descriptions={descriptions} />
      <EducationPageLearnMore/>
      <EducationPageGallery/>
    </>
  );
};

export default AboutPage;
