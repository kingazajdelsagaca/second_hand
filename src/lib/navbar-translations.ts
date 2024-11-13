import { useTranslations } from "next-intl";
import { NavbarTranslationsType } from "~/types/navbar-translations";

export function GetNavbarTranslations(): NavbarTranslationsType {
  const translation = useTranslations("Navbar");

  return {
    about: translation("About"),
    education: translation("Education"),
    services: translation("Services"),
    forgiveness: translation("Forgiveness"),
    journey: translation("Journey"),
    articles: translation("Articles"),
    contact: translation("Contact"),
    courses: translation("Courses"),
    blog: translation("Blog"),
    book: translation("Book"),
  };
}
