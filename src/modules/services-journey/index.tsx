import React from "react";
import ServicesForgivenessPageHeader from "./elements/header";
import ServicesForgivenessQuote from './elements/quote'
import ServicesInfo from './elements/info'
import ServicesForgivenessPageOffer from "./elements/offer";


const ServicesEcommercePage: React.FC = () => {

  const prepareArray = (count:number) =>{
    let tmp = []
    for(let i=0; i<count;i++)
    {
      tmp.push(`${i}`)
    }
    return tmp
  }

  const descriptions1 = prepareArray(2)

  return (
    <>
      <ServicesForgivenessPageHeader />
      {descriptions1.map((x,idx:number)=><ServicesInfo key={idx} content={x}/>)}
      <ServicesForgivenessQuote quote="Quote" author="Harold Macmillan" />
      <ServicesForgivenessPageOffer/>

    </>
  );
};

export default ServicesEcommercePage;
