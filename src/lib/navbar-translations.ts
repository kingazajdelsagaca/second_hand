import { useTranslations } from "next-intl";
import { NavbarTranslationsType } from "~/types/navbar-translations";

export function GetNavbarTranslations(): NavbarTranslationsType {
  const translation = useTranslations("Navbar");

  return {
    main: translation("Main"),
    about: translation("About"),
    offer: translation("Offer"),
    articles: translation("Articles"),
    blog: translation("Blog"),
    contact: translation("Contact"),
  };
}
