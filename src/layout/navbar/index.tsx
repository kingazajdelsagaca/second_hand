"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { cn } from "~/lib/utils";
import { Link, usePathname } from "~/navigation";
import { NavbarTranslationsType } from "~/types/navbar-translations";
import LayoutSelectLanguage from "../language-select";
import LayoutNavbarElements from "./elements";
import LayoutNavbarMobileMenu from "./mobile-menu";

type Props = {
  locale: string;
  translations: NavbarTranslationsType;
};

const LayoutNavbar: React.FC<Props> = (props) => {
  const { locale, translations } = props;
  const path = usePathname();
  const isHomePage = path === "/";
  const isArticlesPage = path === "/articles";
  const isBlogPage = path === "/blog";
  const isContactPage = path === "/contact";
  let stickyMenuBar;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      const logo = document.getElementById("main-logo");

      if (window.scrollY >= 650 && nav?.classList.contains("bg-opacity-0")) {
        nav?.classList.remove("bg-opacity-0");
        logo?.classList.add(
          "fixed",
          "z-[-10]",
          "start-0",
          "end-0",
          "opacity-20"
        );
      } else if (
        window.scrollY < 650 &&
        !nav?.classList.contains("bg-opacity-0")
      ) {
        nav?.classList.add("bg-opacity-0");
        logo?.classList.remove("fixed", "z-[-10]", "opacity-20");
      }
    });
  }, []);

  stickyMenuBar = isArticlesPage ? "relative h-[85px]"
   : isBlogPage ? "relative h-[85px]" 
   : isContactPage ? "relative h-[85px]" 
   : "fixed top-0 left-0 "

  return (
    <nav
      className={cn(
        "z-40 w-full p-5 bg-white bg-opacity-0", stickyMenuBar
        // "z-40 w-full p-5 bg-white bg-opacity-0",
        // isHomePage ? "fixed top-0 left-0 " : "relative h-[85px]"
      )}
    >
      <div className="mx-auto flex items-center justify-between md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px] relative">
        <div>
          <Link href="/" passHref>
            <Image
              src="/secondHandLogo.png"
              width={50}
              height={50}
              sizes="(max-width: 768px): 40px, 60px absolute"
              alt="Kopciuszek logo"
              priority
            />
          </Link>
        </div>
        <div
          className={cn(
            "hidden gap-5 text-black/70 [&>a]:transition-colors lg:flex lg:items-center"
          )}
        >
          <LayoutNavbarElements translations={translations} />
          <LayoutSelectLanguage locale={locale} />
        </div>
        <div className="lg:hidden">
          <LayoutNavbarMobileMenu locale={locale} translations={translations} />
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;
