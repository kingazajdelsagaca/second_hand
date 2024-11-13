import React from "react";
import { cn } from "~/lib/utils";
import { Link } from "~/navigation";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  url?: string;
  className?: string;
  buttonText?: string;
};

const HomePageServiceComponent: React.FC<Props> = (props) => {
  const { icon, title, description, url, className, buttonText } = props;

  return (
    <div
      className={cn(
        "w-full border border-slate-300 shadow-sm flex flex-col rounded-lg p-4 gap-2 md:max-w-none md:items-start lg:max-w-none lg:w-[30%]",
        className
      )}
    >
      <div className="">
        <div className="mx-auto">{icon}</div>
        <h4 className="font-semibold text-black text-lg lg:text-xl my-1">
          {title}
        </h4>
        <p className="text-black/80 text-base text-justify">{description}</p>
      </div>
      {url
      ?<Link
        href={url}
        className="font-semibold text-primary transition-[filter] hover:brightness-95 lg:text-lg">
        {buttonText}
      </Link>
      : (<></>)}
    </div>
  );
};

export default HomePageServiceComponent;
