import React, { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

type Props = {
  title: string;
  className?: string;
  sectionClassName?: string;
};

const LayoutSection: React.FC<PropsWithChildren<Props>> = (props) => {
  const { title, className, sectionClassName, children } = props;

  return (
    <section className={cn("py-4", sectionClassName)}>
      <h3 className="py-6 text-center font-outfit font-semibold text-2xl sm:text-3xl lg:text-3xl">
        {title}
      </h3>
      <div
        className={cn(
          className,
          "mx-auto md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]"
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default LayoutSection;
