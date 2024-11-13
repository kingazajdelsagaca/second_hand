import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { Link } from "~/navigation";
import LayoutSelectLanguage from "../language-select";

type Props = {
  locale: string;
};

const LayoutFooter: React.FC<Props> = (props) => {
  const { locale } = props;

  return ( // bg-primary 
    <footer className="relative p-5 min-h-[200px] md:h-[200px]" style={{backgroundColor: "#F57F17F0"}}>
      <div className="relative h-full flex flex-col gap-5 items-center mx-auto text-white/80 md:max-w-[700px] md:flex-row md:justify-between lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <div className="flex flex-col gap-2 order-2 md:order-1 md:text-sm lg:text-base">
          <div className="flex group space-x-2 items-center [&_a]:transition-colors [&_svg]:transition-colors">
            <IconMail size={32} className="group-hover:text-white" />
            <Link
              href="mailto:sklep@kopciuszek-secondhand.pl"
              className="group-hover:text-white"
            >
              sklep@kopciuszek-secondhand.pl
            </Link>
          </div>
          <div className="flex group space-x-2 items-center [&_a]:transition-colors [&_svg]:transition-colors">
            <IconPhoneCall size={32} className="group-hover:text-white" />
            <Link href="tel:+48555666777" className="group-hover:text-white">
              +48&nbsp;555&nbsp;666&nbsp;777
            </Link>
          </div>
          <NextLink
            href="/polityka-prywatnosci-sagaca.pdf"
            target="_blank"
            className="text-sm font-semibold text-white/90 md:text-white/60 transition-colors md:hover:text-white"
          >
            {locale === "pl" ? "Polityka prywatności" : locale === "de" ? "Datenschutzrichtlinie" :"Policy Privacy"}
          </NextLink>
          <NextLink
            href="https://sagaca.eu"
            target="_blank"
            className="flex items-center gap-2 text-sm font-semibold text-white/90 md:text-white/60 transition-colors md:hover:text-white"
          >
            {locale === "pl" ? "Stworzone przez: " : locale === "de" ?  "Erstellt von " : "Created by: "}
            <Image
              src={"/sagacalogo.png"}
              alt="Sagaca"
              width={32}
              height={32}
              priority
            />
            <span className="font-bold text-white">SAGACA</span>
          </NextLink>
        </div>
        <div className="order-1 flex flex-col items-center space-y-3 md:order-2">
          <Image
            src="/sechan.png"
            width={48}
            height={0}
            className="w-fit mx-auto"
            alt="Kopciuszek Logo"
            priority
          />
          <h4 className="text-white/60 font-medium text-center text-sm">
            &copy; {new Date().getFullYear()} Kopciuszek-secondhand.pl
          </h4>
          {/*bg="bg-secondary"*/}
          <LayoutSelectLanguage locale={locale}/>
        </div>
        <div className="order-3 hidden space-y-3 text-center leading-4 [&>p]:m-0 md:block md:text-sm md:text-right lg:text-base">
          {locale === "pl" ? 
          <><p>ul. Rydla 6, Kraków</p><p>Zapraszamy od&nbsp;poniedziałku do&nbsp;soboty w&nbsp;godzinach 9:00-20:00.</p></>
          :
          locale === "de" ? 
          <><p>Straße Rydla 6, Krakau</p><p>Wir laden Sie von Montag bis Samstag von 9:00 bis 20:00 Uhr ein.</p></>
          : 
          <><p>Rydla Street 6, Krakow</p><p>We invite you from Monday to Saturday from 9:00&nbsp;a.m. to 8:00&nbsp;p.m.</p></>
          }
          <Link href="/contact">
          {/* Napisz do&nbsp;nas. */}
            <p>
              {locale === "pl" ? <>Napisz do&nbsp;nas.</> 
              : locale === "de" ? <>Schreiben Sie uns.</> 
              : <>Write to us.</>} 
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
