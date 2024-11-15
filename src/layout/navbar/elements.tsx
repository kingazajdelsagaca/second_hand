import React, { memo } from "react";
import { Link } from "~/navigation";
import { NavbarTranslationsType } from "~/types/navbar-translations";

type Props = {
  translations: NavbarTranslationsType;
  OnClick?: () => void;
  isMobile?: boolean;
};

const LayoutNavbarElements: React.FC<Props> = (props) => {
  const { translations, OnClick } = props;
  const {
    main,
    about,
    offer,
    articles,
    blog,
    contact,
  } = translations;

  const toggleDropdown = () => {
    console.log("*");

    document.querySelector("#dropdown")?.classList.toggle("hidden");
    document.querySelector("#dropdownArrow")?.classList.toggle("rotate-180");
  };

  return (
    <>

    <Link href="/" className="hover:text-secondary" onClick={OnClick}>
      {main}
    </Link>

    <Link href="/about" className="hover:text-secondary" onClick={OnClick}>
      {about}
    </Link>

    <Link href="/offer" className="hover:text-secondary" onClick={OnClick}>
      {offer}
    </Link>

    <Link href="/articles" className="hover:text-secondary" onClick={OnClick}>
      {articles}
    </Link>

    <Link href="/blog" className="hover:text-secondary" onClick={OnClick}>
      {blog}
    </Link>

    <Link href="/contact" className="hover:text-secondary" onClick={OnClick}>
      {contact}
    </Link>

    </>
  );
};

export default memo(LayoutNavbarElements);
