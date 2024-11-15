"use client";

import { IconMenu2 } from "@tabler/icons-react";
import React, { useState } from "react";
import { NavbarTranslationsType } from "~/types/navbar-translations";
import { Sheet, SheetContent, SheetTrigger } from "~/ui/sheet";
import LayoutSelectLanguage from "../language-select";
import LayoutNavbarElements from "./elements";

type Props = {
  locale: string;
  translations: NavbarTranslationsType;
};

const LayoutNavbarMobileMenu: React.FC<Props> = (props) => {
  const { locale, translations } = props;
  const [opened, setOpened] = useState<boolean>(false);

  const CloseNavbar = () => setOpened(false);

  return (
    <Sheet open={opened} onOpenChange={setOpened}>
      <SheetTrigger asChild>
        <IconMenu2 className="text-black cursor-pointer" size={32} />
      </SheetTrigger>
      <SheetContent
        side="right"
        /*bg-[232331]*/
        className="fixed top-0 z-50 w-full bg-[#C45902] border-none text-white/70 sm:w-[400px] lg:hidden"
      >
        <div className="mt-8 flex flex-col gap-4 text-lg [&>a]:transition-colors">
          <LayoutNavbarElements
            translations={translations}
            OnClick={CloseNavbar}
            isMobile={true}
          />
        </div>
        <div className="absolute left-6 bottom-6" style={{color: "#000",}}> {/* color: "#F0943E"*/}
          <LayoutSelectLanguage locale={locale} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LayoutNavbarMobileMenu;
