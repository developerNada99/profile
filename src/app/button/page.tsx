"use client"
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const Button = () => {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false); // Flag to check hydration

  useEffect(() => {
    // Set hydrated flag to true after the page has loaded
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null; // Prevent rendering until hydrated
  }

  return (
    <div className='relative'>
      <img src='button.jpg' alt='' className='w-full h-60' />
      <div className='absolute inset-0 bg-black bg-opacity-60 z-50'></div>
      <div className='absolute inset-0 flex flex-col justify-center items-center z-[60] max-md:text-center'>
        <h2 className='font-bold text-4xl text-white max-md:text-3xl'>{t("Learn More About the World of Petroleum Engineering")}</h2>
        <button className='w-72 h-10 mt-4 text-white font-bold rounded-2xl transition ease-in-out delay-150 bg-[#222222] hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700 duration-300'>
          {t("Set Out")}
        </button>
      </div>
    </div>
  );
}

export default Button;
