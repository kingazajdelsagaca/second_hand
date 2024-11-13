import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import LayoutSection from "~/layout/section";
import Gallery from "../components/gallery";

const HomePageIntro = () => {
  const translation = useTranslations("Education");
    return(<Gallery title={translation('Title2')}/>)
};

export default HomePageIntro;
