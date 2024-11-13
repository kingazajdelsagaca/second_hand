import { IconCheck } from "@tabler/icons-react";
import React from "react";
import { cn } from "~/lib/utils";
import { Separator } from "~/ui/separator";

type Props = {
  // icon: JSX.Element;
  price?: string,
  time: string
  className?: string;
  bigger?: boolean
};

const ServicesEcommerceOfferComponent: React.FC<Props> = (props) => {
  const { time, price, className,bigger } =
    props;

  return (
    <div
      className={cn(
        "w-full items-center h-fit flex flex-col rounded-lg p-4 gap-2 md:max-w-none lg:max-w-none lg:w-[50%] mb-6",
        bigger && "lg:scale-105",
        className
      )}
    >
     
      
      <div className="relative text-center w-full mt-4 pb-2">
        <p className="font-semibold text-lg md:text-xl lg:text-2xl">{price}</p>
        <p className="font-semibold text-lg md:text-xl lg:text-2xl">{time}</p>
      </div>
    </div>
  );
};

export default ServicesEcommerceOfferComponent;
