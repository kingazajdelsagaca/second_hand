"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Loader2Icon } from "lucide-react";
import PaginationComponent from "~/layout/pagination";
import { StrapiArticleType } from "~/lib/actions";
import ArticleComponent from "./components/article-component";

type Props = {
  strapiUrl: string | undefined;
  s3Url: string | undefined;
  articles: StrapiArticleType[] | undefined;
  articlesCount: number;
  page: number;
  error: boolean;
  message: string;
};

const ArticlesPage: React.FC<Props> = (props) => {
  const { strapiUrl, s3Url, articles, page, articlesCount, error, message } =
    props;

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // reset loading
    setLoading(false);
  }, [articles]);

  useEffect(() => {
    if (error) {
      console.error(message || "Unknown error");
    }
  }, [error, message]);

  const createQueryString = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(key, value);

      return params.toString();
    },
    [searchParams]
  );

  const UpdateQueries = useCallback(
    (query: string) => {
      setLoading(true);

      router.push(pathname + "?" + query, {
        scroll: false,
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    [pathname, router]
  );

  const OnPageChange = useCallback(
    async (page: number, _endOffset: number) => {
      const newPage = !Number.isNaN(page) ? page + 1 : 1;
      const currentPage = Number(searchParams.get("page"));

      if (newPage !== currentPage) {
        UpdateQueries(createQueryString("page", newPage.toString()));
      }
    },
    [UpdateQueries, createQueryString, searchParams]
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-85px-200px)]">
        <Loader2Icon className="animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-85px-200px)]">
        <p className="font-semibold text-center">
          Nie udało się wczytać artykułów
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-85px-200px)]">
      <div className="relative mx-auto w-full p-5 md:px-0 md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        {(articles ?? []).length > 0 ? (
          <>
            <div className="w-full grid gap-5 grid-cols-1 lg:grid-cols-2">
              {articles?.map((article) => (
                <ArticleComponent
                  key={article.id}
                  strapiUrl={strapiUrl}
                  s3Url={s3Url}
                  {...article}
                />
              ))}
            </div>
            <PaginationComponent
              OnPageChange={OnPageChange}
              isLoading={false}
              count={articlesCount}
              offset={page || 0}
              initialPage={page ?? 0}
            />
          </>
        ) : (
          <div className="flex justify-center items-center min-h-[calc(100vh-85px-200px)]">
            <p className="font-semibold text-center">
              Lista artykułów jest pusta
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
