import Markdown from "markdown-to-jsx";
import React from "react";

type Props = {
  content: string;
};

const CoursesStrapiElement: React.FC<Props> = (props) => {
  const { content } = props;

  return (
    <div className="relative  pt-4 pb-4 space-y-5 flex justify-center flex-column items-center ">
      <div className="relative w-full flex flex-col gap-10 md:max-w-[700px]  lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <div className="flex flex-col p-3 gap-10 mx-auto w-full lg:p-0 lg:gap-5 lg:flex-row lg:items-center lg:justify-between  lg:px-6">
          <Markdown className="text-black text-center text-base md:text-lg lg:text-justify">
            {content}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default CoursesStrapiElement;
