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
    about,
    contact,
    education,
    services,
    forgiveness,
    journey,
    articles,
    courses,
    blog,
    book,
  } = translations;

  const toggleDropdown = () => {
    console.log("*");

    document.querySelector("#dropdown")?.classList.toggle("hidden");
    document.querySelector("#dropdownArrow")?.classList.toggle("rotate-180");
  };

  return (
    <>
      <Link href="/about" className="hover:text-gray-900" onClick={OnClick}>
        {about}
      </Link>

      <Link href="/education" className="hover:text-gray-900" onClick={OnClick}>
        {education}
      </Link>

      {!props.isMobile ? (
        <div className="relative">
          <button
            className="text-center inline-flex items-center"
            type="button"
            onClick={toggleDropdown}
          >
            {services}
            <svg
              id="dropdownArrow"
              className="w-2.5 h-2.5 ms-3 duration-300"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 "
          >
            <ul className="py-2 text-sm text-gray-700">
              <li className="p-3">
                <Link
                  href="/services/forgiveness"
                  className="hover:text-gray-900"
                  onClick={OnClick}
                >
                  {forgiveness}
                </Link>
              </li>
              <hr />
              <li className="p-3">
                <Link
                  href="/services/journey"
                  className="hover:text-gray-900"
                  onClick={OnClick}
                >
                  {journey}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          {services} :
          <ul className="pl-2">
            <li className="p-3 py-1">
              <Link
                href="/services/forgiveness"
                className="hover:text-gray-900"
                onClick={OnClick}
              >
                {forgiveness}
              </Link>
            </li>
            <li className="p-3 py-1">
              <Link
                href="/services/journey"
                className="hover:text-gray-900"
                onClick={OnClick}
              >
                {journey}
              </Link>
            </li>
          </ul>
        </>
      )}
      <Link href="/articles" className="hover:text-gray-900" onClick={OnClick}>
        {articles}
      </Link>
      {/* Ukryte */}
      <Link
        href="/book"
        className="hover:text-gray-900 hidden"
        onClick={OnClick}
      >
        {book}
      </Link>

      <Link href="/blog" className="hover:text-gray-900" onClick={OnClick}>
        {blog}
      </Link>

      <Link href="/courses" className="hover:text-gray-900" onClick={OnClick}>
        {courses}
      </Link>
      <Link href="/contact" className="hover:text-gray-900" onClick={OnClick}>
        {contact}
      </Link>
    </>
  );
};

export default memo(LayoutNavbarElements);
