"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Cookies from 'js-cookie';
import Link from 'next/link';

const Nav = () => {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(Cookies.get("i18next") || "en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang).then(() => {
      setCurrentLang(newLang);
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={`navbar flex justify-between items-center fixed top-0 w-full z-50 transition-colors duration-300 max-md:p-0 ${isScrolled ? 'bg-[#333333]' : 'bg-transparent'} p-5`}>
  <button 
    className="text-white text-3xl hidden max-md:flex absolute top-4 right-4 z-30" 
    onClick={toggleMenu} 
  >
    {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
  : '☰'}
  </button>
  { isMenuOpen &&
<ul className={`hidden max-md:flex max-md:items-center max-md:flex-grow max-md:justify-center max-md:gap-5 max-md:flex-col max-md:bg-[#333333] max-md:opacity-85 max-md:pt-8 max-md:h-screen `}>
    <Link href="/"><li  className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">{t("Home")}</li></Link>
    <Link href="#about"><li className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">{t("About")}</li></Link>
    <Link href="#video"><li  className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">{t("Videos")}</li></Link>
    <Link href="#contact"><li className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300">{t("Contact")}</li></Link>
    <li><button 
    className='hidden max-md:block text-white uppercase text-lg hover:text-yellow-600 transition duration-300 text-center'
    onClick={toggleLanguage}
  >
    {currentLang === "en" ? "عربى" : "English"}
  </button> 
  </li>
  </ul>
}

  {/* Centered nav items */}
  <ul className={`flex items-center flex-grow justify-center gap-5 max-md:hidden`}>
    <Link href="/" className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300"><li>{t("Home")}</li></Link>
    <Link href="#about" className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300"><li>{t("About")}</li></Link>
    <Link href="#video" className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300"><li>{t("Videos")}</li></Link>
    <Link href="#contact" className="text-white uppercase text-lg hover:text-yellow-600 transition duration-300"><li>{t("Contact")}</li></Link>
  </ul>

  <button 
    className='hidden md:block text-white uppercase text-lg hover:text-yellow-600 transition duration-300 absolute right-8'
    onClick={toggleLanguage}
  >
    {currentLang === "en" ? "عربى" : "English"}
  </button> 
</nav>

    </div>
  )
}

export default Nav