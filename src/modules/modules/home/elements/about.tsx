import { useTranslations } from "next-intl";
import React from "react";
import LayoutSection from "~/layout/section";
import { Link } from "~/navigation";
import { Button } from "~/ui/button";

const HomePageLearnMore: React.FC = () => {
  const translation = useTranslations("Home.AboutUs");

  return (
    <LayoutSection title="Nasza misja"
    /*{translation("Title") Chciałbyś dowiedzieć się więcej? }*/ sectionClassName="py-12 pb-20">
      <p className="px-5 text-center  text-black/80 mx-auto text-base lg:text-lg lg:max-w-xl xl:max-w-3xl">
        {/*translation("Description") Zachęcam do odwiedzenia dedykowanych podstrony, gdzie znajdziesz szczegółowy opis mojej pracy, oraz poznasz moją drogę rozwoju. Dowiedz sie więcej czemu warto mi zaufać i skorzystać z mojej pomocy.*/}
        Jeśli chcesz się dowiedzieć więcej o&nbsp;naszym sklepie, jego historii i&nbsp;naszej działalności, odwiedź tę&nbsp;stronę.
      </p>
      <div className="flex justify-center w-full mt-6">
        <Link href="/about" className="w-fit mx-auto" passHref>
          <Button className="px-8" style={{backgroundColor: "#F57F17"}}>{
            translation("Button")
            }
          </Button>
        </Link>
      </div>
    </LayoutSection>
  );
};

export default HomePageLearnMore;
