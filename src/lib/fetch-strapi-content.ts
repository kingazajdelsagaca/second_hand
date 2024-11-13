import { getErrorMessage } from "./utils";

export type StrapiApiType<T> = {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiObjectType<T> = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  } & T;
};

export type StrapiFileType = {
  data: {
    id: number;
    attributes: {
      name: string;
      url: string;
      width: number;
      height: number;
      ext: string;
    };
  };
};

type ResponseType<T> = {
  error: boolean;
  message: string;
  response: StrapiApiType<T> | null;
};

export async function FetchStrapiContent<Response>(
  location: string,
  page?: number,
  limit?: number
): Promise<ResponseType<Response>> {
  const strapiUrl = process.env.STRAPI_URL;
  const strapiApiToken = process.env.STRAPI_API_TOKEN;

  if (!strapiUrl) {
    return {
      error: true,
      message: "Invalid Strapi data",
      response: null,
    };
  }

  try {
    const data = await fetch(
      `${strapiUrl}${location}&pagination[pageSize]=${limit}&pagination[page]=${page}`,
      {
        method: "GET",
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${strapiApiToken}`,
        },
      }
    ).then((response) => response.json());

    return {
      error: false,
      message: "",
      response: data as StrapiApiType<Response> | null,
    };
  } catch (error: any) {
    return {
      error: true,
      message: getErrorMessage(error),
      response: null,
    };
  }
}
