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

  const descriptions1 = prepareArray(7)
  const descriptions2 = prepareArray(5)

  return (
    <>
      <ServicesForgivenessPageHeader />
      {descriptions1.map((x,idx:number)=><ServicesInfo key={idx} content={x}/>)}
      <ServicesForgivenessQuote quote="Quote1" author="Konfuzius" />
      {descriptions2.map((x,idx:number)=><ServicesInfo title={idx===0? "Title": ""} key={idx} path="Forgiveness.Content2" content={x}/>)}
      <ServicesForgivenessQuote quote="Quote2" author="Mark Twain" />
      <ServicesForgivenessPageOffer/>

    </>
  );
};

export default ServicesEcommercePage;
