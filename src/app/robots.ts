import { MetadataRoute } from "next";

const url = process.env.PAGE_URL ?? "http://localhost:3000";

export default async function Robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: url,
    sitemap: `${url}/sitemap.xml`,
  };
}
