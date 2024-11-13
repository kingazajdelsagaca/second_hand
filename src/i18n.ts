import { getRequestConfig } from "next-intl/server";
import { redirect } from "next/navigation";

// Can be imported from a shared config
const locales = ["pl", "de"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) redirect("/pl");

  return {
    messages: (await import(`./i18n/${locale}.json`)).default,
  };
});
