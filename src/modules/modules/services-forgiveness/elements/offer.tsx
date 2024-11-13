import { useTranslations } from "next-intl";
import React from "react";
import LayoutSection from "~/layout/section";
import ServicesEcommerceOfferComponent from "../components/offer";
import {Link} from '~/navigation'
import {Button} from '~/ui/button'


const ServicesForgivenessPageOffer: React.FC = () => {
  const translation = useTranslations("Forgiveness.Offer");

  return (
    <LayoutSection title={''}>
      <div className="flex flex-col px-5 gap-5 md:justify-center md:flex-row md:flex-wrap lg:justify-center lg:px-0 border shadow-md m-4 mb-12 ">
        <ServicesEcommerceOfferComponent time={translation('Time')} price={translation('Price')}/>
      </div>
      <p className="px-5 text-center  text-black mx-auto text-base lg:text-xl lg:max-w-xl xl:max-w-3xl">
        {translation('CantAfford')}
      </p>
      <p className="px-5 text-center mt-2 text-black mx-auto text-base lg:text-xl lg:max-w-xl xl:max-w-3xl">
        {translation('Payment')}
      </p>
      <div className="flex justify-center w-full mt-6 mb-12">
        <Link href="/contact" className="w-fit mx-auto" passHref>
          <Button className="px-8">{translation("Contact")}</Button>
        </Link>
      </div>
    </LayoutSection>
  );
};

export default ServicesForgivenessPageOffer;
