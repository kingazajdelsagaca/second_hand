import { useTranslations } from "next-intl";
import React from "react";
import LayoutSection from "~/layout/section";
import { Link } from "~/navigation";
import { Button } from "~/ui/button";

const EducationPageLearnMore: React.FC = () => {
  const translation = useTranslations("Home.AboutUs");

  return (
    <LayoutSection title={
        translation("Title")
        // Chciałbyś dowiedzieć się więcej?
        // locale === "pl" ? "Chcesz wiedzieć więcej?" : locale === "de" ? "Möchten Sie mehr wissen?" : "Want to know more?"
        // "Chcesz wiedzieć więcej?"
      }
      sectionClassName="py-12 pb-20">
      <p className="px-5 text-center  text-black/80 mx-auto text-base lg:text-lg lg:max-w-xl xl:max-w-3xl">
        {
        translation("Description")
        // Zachęcam do odwiedzenia dedykowanych podstrony, gdzie znajdziesz szczegółowy opis mojej pracy, oraz poznasz moją drogę rozwoju. Dowiedz sie więcej czemu warto mi zaufać i skorzystać z mojej pomocy.
        // locale === "pl" ? "O nas" : locale === "de" ? "Über uns" : "About us"
        }
        {/* Zachęcamy do&nbsp;odwiedzenia podstrony dedykowanej przybliżeniu naszej działalności i&nbsp;historii tego miejsca. */}
      </p>
      <div className="flex justify-center w-full mt-6">
        <Link href="/about" className="w-fit mx-auto" passHref>
          <Button className="px-8" style={{backgroundColor: "#F57F17"}}>{
            translation("Button")
            // Sprawdź Więcej
            // locale === "pl" ? "Więcej" : locale === "de" ? "Mehr" : "More"
          }
          {/* Więcej */}
          </Button>
        </Link>
      </div>
    </LayoutSection>
  );
};

export default EducationPageLearnMore;
