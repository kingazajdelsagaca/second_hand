import { unstable_setRequestLocale } from "next-intl/server";
import { Inter, Outfit, Public_Sans } from "next/font/google";
import React, { PropsWithChildren } from "react";
import LayoutFooter from "~/layout/footer";
import LayoutNavbar from "~/layout/navbar";
import { GetNavbarTranslations } from "~/lib/navbar-translations";
import { cn } from "~/lib/utils";
import { Toaster } from "~/ui/sonner";

const public_sans = Public_Sans({subsets: ['latin','latin-ext'],variable: '--font-public-sans'})

type Props = {
  params: {
    locale: string;
  };
};

export async function generateStaticParams() {
  return [{ locale: "de" }, { locale: "pl" }, { locale: "en" }];
}

const Layout: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, params } = props;
  unstable_setRequestLocale(params.locale);

  const translation = GetNavbarTranslations();

  return (
    <>
      <html lang={params.locale}>
        <body className={cn(public_sans.variable, "font-inter")}>
          <LayoutNavbar locale={params.locale} translations={translation} />
          <main>{children}</main>
          <LayoutFooter locale={params.locale} />
          <Toaster />
        </body>
      </html>
    </>
  );
};

export default Layout;
