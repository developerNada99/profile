"use client"
import React from 'react';
import { useTranslation } from "react-i18next";

const Button = () => {
    const { t } = useTranslation();

  return (
    <div className='relative h-60 bg-cover bg-center' style={{ backgroundImage: 'url(/freepik__upload__30883.png)' }}>
        <div className='absolute inset-0 bg-black bg-opacity-60 z-20'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center z-20 max-md:text-center'>
           <h2 className='font-bold text-4xl text-white max-md:text-3xl'>{t("Learn More About the World of Petroleum Engineering")}</h2> 
           <button className='w-72 h-10 mt-4 text-white font-bold rounded-2xl transition ease-in-out delay-150  bg-[#222222] hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700 duration-700'>{t("Set Out")}</button>
        </div>
    </div>
  )
}

export default Button;
