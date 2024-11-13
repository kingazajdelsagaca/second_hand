"use server";

import {
  FetchStrapiContent,
  StrapiFileType,
  StrapiObjectType,
} from "../fetch-strapi-content";

export type StrapiBlogType = StrapiObjectType<{
  Tytul: string;
  Opis: string;
  Miniaturka: StrapiFileType;
}>;

export type StrapiArticleType = StrapiObjectType<{
  Tytul: string;
  Opis: string;
  Miniaturka: StrapiFileType;
  Plik: StrapiFileType;
}>;

export type WorkshopsType = StrapiObjectType<{
  Tytul: string;
  Opis: string;
  Tekst: string;
}>;

export async function RetrieveBlogs(
  locale: string,
  page: number = 1,
  limit: number = 10
) {
  return await FetchStrapiContent<StrapiBlogType[]>(
    `/api/blogs?populate=Miniaturka&locale=${locale}`,
    page,
    limit
  );
}

export async function RetrieveArticles(
  locale: string,
  page: number = 1,
  limit: number = 10
) {
  return await FetchStrapiContent<StrapiArticleType[]>(
    `/api/articles?populate=Miniaturka,Plik&locale=${locale}`,
    page,
    limit
  );
}

export async function RetrieveBlog(id: number, locale: string) {
  return await FetchStrapiContent<StrapiBlogType>(
    `/api/blogs/${id}?populate=Miniaturka&locale=${locale}`
  );
}

export async function RetrieveWorkshopsPage(locale: string) {
  return await FetchStrapiContent<WorkshopsType>(
    `/api/warsztaty?locale=${locale}`
  );
}
