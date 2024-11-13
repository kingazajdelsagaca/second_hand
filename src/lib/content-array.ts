import { Formats, TranslationValues } from "next-intl";

type TranslationFuncType = (
  key: string,
  values?: TranslationValues | undefined,
  formats?: Partial<Formats> | undefined
) => string;

export function GetContentArray(
  translation: TranslationFuncType,
  maxSize: number,
  key: string,
  subElement?: string // if content array has object instead of strings
) {
  return new Array(maxSize).fill(0).map((_, index) => {
    const str = translation(
      `${key}.${index}` + (subElement ? `.${subElement}` : "")
    );

    if (str.includes(`${key}.${index}`)) {
      return "";
    }

    return str;
  });
}
