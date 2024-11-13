import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return `${error.name}: ${error.message}`;

  return String(error);
}

export function shortenDescription(value: string, maxSentences: number) {
  const sentences: string[] = value.match(/[^\.!\?]+[\.!\?]+/g) || [];

  if (sentences.length <= maxSentences) {
    return value;
  }

  let shortenedText = sentences.slice(0, maxSentences).join(" ");

  if (shortenedText[shortenedText.length - 1] === ".") {
    shortenedText = shortenedText.slice(0, shortenedText.length - 1);
  }

  return shortenedText + (sentences.length > maxSentences ? "..." : "");
}

export function getStrapiFileUrl(
  url: string,
  strapiDomain: string | undefined,
  s3Domain: string | undefined
) {
  if (!url) {
    return "";
  }

  if (!!s3Domain || !strapiDomain) {
    return url;
  }

  return `${strapiDomain}${url}`;
}
