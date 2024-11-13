import React from "react";
import BlogPageContact from "./elements/contacts";
import BlogPageHeader from "./elements/header";
import BlogInfo from "./elements/info";

const BlogPage: React.FC = () => {
  const prepareArray = (count: number) => {
    let tmp = [];
    for (let i = 0; i < count; i++) {
      tmp.push(`${i}`);
    }
    return tmp;
  };

  const descriptions = prepareArray(24);

  return (
    <>
      {descriptions.map((x, idx: number) =>
        idx === 0 ? (
          <BlogPageHeader key={idx} />
        ) : (
          <BlogInfo key={idx} content={x} />
        )
      )}
      <BlogPageContact />
    </>
  );
};

export default BlogPage;
