import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import LayoutSection from "~/layout/section";
import Gallery from "../components/gallery";

const HomePageIntro = () => {
  const translation = useTranslations("Education");
    return(<Gallery title={
      // translation('Title2')
      // Moje certyfikaty
      // locale === "pl" ? "Kategorie przedmiotów" : locale === "de" ? "Artikelkategorien" : "Item categories"
      "Kategorie przedmiotów"
    }/>)
};

export default HomePageIntro;
