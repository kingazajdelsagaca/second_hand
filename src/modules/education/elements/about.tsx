import { useTranslations } from "next-intl";
import React from "react";
import LayoutSection from "~/layout/section";
import { Link } from "~/navigation";
import { Button } from "~/ui/button";

const EducationPageLearnMore: React.FC = () => {
  const translation = useTranslations("Home.AboutUs");

  return (
    <LayoutSection title={translation("Title")} sectionClassName="py-12 pb-20">
      <p className="px-5 text-center  text-black/80 mx-auto text-base lg:text-lg lg:max-w-xl xl:max-w-3xl">
        {translation("Description")}
      </p>
      <div className="flex justify-center w-full mt-6">
        <Link href="/about" className="w-fit mx-auto" passHref>
          <Button className="px-8">{translation("Button")}</Button>
        </Link>
      </div>
    </LayoutSection>
  );
};

export default EducationPageLearnMore;
