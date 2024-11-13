import React, { useMemo } from "react";
import { WorkshopsType } from "~/lib/actions";
import CoursesPageContacts from "./elements/contacts";
import CoursesPageHeader from "./elements/header";
import CoursesPageInfo from "./elements/info";
import CoursesStrapiElement from "./elements/strapi-element";

type Props = {
  data: WorkshopsType | undefined;
};

const CoursesPage: React.FC<Props> = (props: Props) => {
  const { data } = props;

  const localDescriptions = useMemo(() => {
    let tmp = [];
    const count = 3;

    for (let i = 0; i < count; i++) {
      tmp.push(`${i}`);
    }

    return tmp;
  }, []);

  if (!data) {
    return (
      <>
        <CoursesPageHeader />
        {localDescriptions.map((x, idx: number) => (
          <CoursesPageInfo key={idx} content={x} />
        ))}
        <CoursesPageContacts />
      </>
    );
  }

  return (
    <>
      <CoursesPageHeader
        title={data?.attributes?.Tytul}
        description={data?.attributes?.Opis}
      />
      <CoursesStrapiElement
        content={(data?.attributes?.Tekst ?? "").replaceAll(/\\/g, "<br><br>")}
      />
      <CoursesPageContacts />
    </>
  );
};

export default CoursesPage;
