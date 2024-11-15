import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import LayoutSection from "~/layout/section";
import Gallery from "../components/gallery";

const HomePageIntro = () => {
  const translation = useTranslations("Offer");
    return(
    <Gallery
      title={
        translation('Title3')
        // Moje certyfikaty
        // locale === "pl" ? "Kategorie przedmiotów" : locale === "de" ? "Artikelkategorien" : "Item categories"
        // "Kategorie przedmiotów"
      }
      // labels={["abc", "def"]}
      labels={[
        translation('Gallery01'),
        translation('Gallery02'),
        translation('Gallery03'),
        translation('Gallery04'),
        translation('Gallery05'),
        translation('Gallery06'),
        translation('Gallery07'),
        translation('Gallery08'),
      ]}
    />
  )
};

export default HomePageIntro;
