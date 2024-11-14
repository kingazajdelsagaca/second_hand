import { useTranslations } from "next-intl";
import { NavbarTranslationsType } from "~/types/navbar-translations";

export function GetNavbarTranslations(): NavbarTranslationsType {
  const translation = useTranslations("Navbar");

  return {
    main: translation("Main"),
    about: translation("About"),
    // education: translation("Education"),
    offer: translation("Offer"),
    // services: translation("Services"),
    // forgiveness: translation("Forgiveness"),
    // journey: translation("Journey"),
    articles: translation("Articles"),
    blog: translation("Blog"),
    // courses: translation("Courses"),
    // book: translation("Book"),
    contact: translation("Contact"),
  };
}
