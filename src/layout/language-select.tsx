"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "~/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/ui/select";

import Image from "next/image";

type Props = {
  locale: string;
  bg?: string;
};

const LayoutSelectLanguage: React.FC<Props> = (props) => {
  const { locale,bg } = props;
  const [value, setValue] = useState<string>(locale || "pl");
  const pathname = usePathname();
  const { replace } = useRouter();

  const UpdateValue = (value: string) => {
    setValue(value);

    replace(pathname, {
      locale: value,
      scroll: false,
    });
  };

  return (
    <Select value={value} onValueChange={UpdateValue}>
      <SelectTrigger className={`rounded-lg border-none outline-none ${bg?bg:"bg-gray-200"} w-[84px]`}>
        <SelectValue>
          <FlagElement locale={locale} />
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        side="bottom"
        className="-left-6 rounded-lg bg-white text-black border-[1px] border-color-gray-200"
      >
        <SelectItem value="pl" className="focus:bg-gray-200 focus:text-black">
          <FlagElement locale="pl" />
          <span className="font-semibold">Polski</span>
        </SelectItem>
        <SelectItem value="de" className="focus:bg-gray-200 focus:text-black">
          <FlagElement locale="de" />
          <span className="font-semibold">Deutsch</span>
        </SelectItem>
        <SelectItem value="en" className="focus:bg-gray-200 focus:text-black">
          <FlagElement locale="en" />
          <span className="font-semibold">English</span>
        </SelectItem>
        
      </SelectContent>
    </Select>
  );
};

export default LayoutSelectLanguage;

const FlagElement: React.FC<Props> = (props) => {
  const { locale } = props;

  return (
    <Image
      src={locale === "pl" ? "/flags/pl.svg" : locale === "de" ? "/flags/de.svg" : "/flags/en.svg"}
      alt={locale === "pl" ? "Polski" : locale === "de" ? "Deutsch" : "English"}
      width={28}
      height={28}
      className="mr-2 inline-block"
    />
  );
};
