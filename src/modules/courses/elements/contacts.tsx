import { useTranslations } from "next-intl";
import React from "react";
import LayoutSection from "~/layout/section";
import {Link} from '~/navigation'
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";


const CoursesPageContacts: React.FC = () => {
  const translation = useTranslations("Courses");

  return (
    <LayoutSection title={''}>
      <p className="px-5 text-center mt-2 text-black mx-auto text-base lg:text-xl lg:max-w-xl xl:max-w-3xl">
        {translation('Contact')}
      </p>
      <div className="flex justify-center  my-6 mx-auto">
        <Link href='https://www.facebook.com/' className="cursor-pointer">
          <IconBrandFacebook className="cursor-pointer bg-primary text-white rounded-xl border border 
          border-gray-600 m-2 w-[40px] h-[40px] shadow-md"/> 
        </Link>
        <Link href='https://www.instagram.com/' className="curson-pointer">
          <IconBrandInstagram className="cursor-pointer bg-primary text-white rounded-xl border border 
          border-gray-600 m-2 w-[40px] h-[40px] shadow-md"/>
        </Link>
      </div>
      
      {/*<div className="flex justify-center w-full mt-6 mb-12">
        <Link href="/contact" className="w-fit mx-auto" passHref>
          <Button className="px-8">{translation("Button")}</Button>
        </Link>
      </div> */}
    </LayoutSection>
  );
};

export default CoursesPageContacts;
