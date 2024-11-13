"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Loader2Icon } from "lucide-react";
import PaginationComponent from "~/layout/pagination";
import { StrapiBlogType } from "~/lib/actions";
import NewBlogComponent from "./NewBlogsComponent";

type Props = {
  strapiUrl: string | undefined;
  s3Url: string | undefined;
  blogs: StrapiBlogType[] | undefined;
  blogsCount: number;
  page: number;
  error: boolean;
  message: string;
};

const NewBlogs: React.FC<Props> = (props) => {
  const { strapiUrl, s3Url, blogs, page, blogsCount, error, message } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // reset loading
    setLoading(false);
  }, [blogs]);

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
          Nie udało się wczytać blogów
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-85px-200px)]">
      <div className="relative mx-auto w-full p-5 md:px-0 md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        {(blogs ?? []).length > 0 ? (
          <>
            <div className="w-full grid gap-5 grid-cols-1 lg:grid-cols-2">
              {blogs?.map((blog) => (
                <NewBlogComponent
                  key={blog.id}
                  strapiUrl={strapiUrl}
                  s3Url={s3Url}
                  {...blog}
                />
              ))}
            </div>
            <PaginationComponent
              OnPageChange={OnPageChange}
              isLoading={false}
              count={blogsCount}
              offset={page || 0}
              initialPage={page ?? 0}
            />
          </>
        ) : (
          <div className="flex justify-center items-center min-h-[calc(100vh-85px-200px)]">
            <p className="font-semibold text-center">Lista blogów jest pusta</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewBlogs;
