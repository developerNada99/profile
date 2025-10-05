"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import BtnChangLang from "./lang/BtnChangLang";

const Nav = () => {
  const t = useTranslations("Navbar");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav
        className={`navbar flex justify-between items-center fixed top-0 w-full z-50 transition-colors duration-300 max-md:p-0 ${
          isScrolled
            ? "bg-black/10 backdrop-blur-md"
            : "bg-transparent"
        } p-5`}
      >
        {/* زر الموبايل */}
        <button
          className="text-white text-3xl hidden max-md:flex absolute top-4 right-4 z-30"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            "☰"
          )}
        </button>

        {/* قائمة الموبايل */}
        {isMenuOpen && (
          <ul className="hidden max-md:flex max-md:items-center max-md:flex-grow max-md:justify-center max-md:gap-5 max-md:flex-col max-md:bg-black/60 max-md:backdrop-blur-md max-md:pt-8 max-md:h-screen">
            <Link href="/">
              <li className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">
                {t("Home")}
              </li>
            </Link>
            <Link href="/about">
              <li className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">
                {t("About")}
              </li>
            </Link>
            <Link href="/resume">
              <li className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">
                {t("Resume")}
              </li>
            </Link>
            <Link href="/message">
              <li className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">
                {t("Contact")}
              </li>
            </Link>
            <li>
              <button className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300 text-center">
                <BtnChangLang />
              </button>
            </li>
          </ul>
        )}

        {/* قائمة الديسكتوب */}
        <ul className="flex items-center flex-grow justify-center gap-5 max-md:hidden">
          <Link href="/">
            <li className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">
              {t("Home")}
            </li>
          </Link>
          <Link href="/about">
            <li className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">
              {t("About")}
            </li>
          </Link>
          <Link href="/resume">
            <li className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">
              {t("Resume")}
            </li>
          </Link>
          <Link href="/message">
            <li className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">
              {t("Contact")}
            </li>
          </Link>
        </ul>

        {/* زر تغيير اللغة */}
        <button className="hidden md:block text-white uppercase text-lg hover:text-yellow-600 transition duration-300 absolute right-8">
          <BtnChangLang />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
