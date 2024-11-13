import { useTranslations } from "next-intl";
import React from "react";
import LayoutSection from "~/layout/section";
import ServicesEcommerceOfferComponent from "../components/offer";
import {Link} from '~/navigation'
import {Button} from '~/ui/button'


const BlogPageOffer: React.FC = () => {
  const translation = useTranslations("Blog");

  return (
    <LayoutSection title={''}>
      <p className="px-5 text-center  text-black mx-auto text-base lg:text-xl lg:max-w-xl xl:max-w-3xl">
        <strong>{translation('Author')}</strong>
      </p>
      <p className=" text-center mt-2 text-black mx-auto text-base lg:text-xl lg:max-w-xl xl:max-w-3xl">
        <strong>{translation('Translator')}</strong>
      </p>
      <p className=" text-center mt-2 text-black mx-auto text-base lg:text-xl lg:max-w-xl xl:max-w-3xl">        {translation('Contact')}
        </p>
      <p className="px-5 mb-8 text-center mt-2 text-black mx-auto text-base lg:text-xl lg:max-w-xl xl:max-w-3xl">
        {translation('About')}
      </p>
    </LayoutSection>
  );
};

export default BlogPageOffer;
