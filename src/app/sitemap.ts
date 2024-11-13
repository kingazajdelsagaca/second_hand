import { MetadataRoute } from "next";

const url = process.env.PAGE_URL ?? "http://localhost:3000";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ["pl", "de"];

  const routes = locales.map((locale) => [
    {
      url: `${url}/${locale}`,
      priority: 1,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${url}/${locale}/about`,
      priority: 0.5,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${url}/${locale}/contact`,
      priority: 0.5,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${url}/${locale}/services/ecommerce`,
      priority: 0.7,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${url}/${locale}/services/integration`,
      priority: 0.7,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${url}/${locale}/services/software`,
      priority: 0.7,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
  ]) as MetadataRoute.Sitemap[];

  return routes.flat();
}
