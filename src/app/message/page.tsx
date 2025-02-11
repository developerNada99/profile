"use client"
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Message = () => {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false); // Flag to check hydration

  useEffect(() => {
    // Set hydrated flag to true after the page has loaded
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <div className='flex justify-center items-center bg-[#222222] max-lg:flex-col relative h-full'>
      <div className='w-1/2 max-md:w-full max-lg:w-full relative'>
        <Image src='/message.jpg' alt='' className="w-full h-full" height={900} width={900} />
        <div className='absolute inset-0 bg-black/65 bg-opacity-40'></div>
      </div>
      <div className='w-1/2 flex flex-col justify-center my-24 items-center gap-5 max-md:w-full max-md:mt-5 max-lg:w-full'>
        <h2 className='font-bold text-4xl text-white'>{t("Get in Touch")}</h2>
        <input className='w-2/4 h-10 mb-4 p-4 outline-none bg-[#e6e6e6] rounded-2xl' type='text' placeholder={t('input-name')} name='name'/>
        <input className='w-2/4 h-10 mb-4 p-4 outline-none bg-[#e6e6e6] rounded-2xl' type='email' name='email' placeholder={t('input-email')}/>
        <textarea className='w-2/4 h-24 mb-4 p-4 outline-none bg-[#e6e6e6] rounded-2xl' placeholder={t('input-message')}></textarea>
        <button className='w-2/4 h-10 bg-[#333333] rounded-2xl transition ease-in-out delay-150 hover:bg-yellow-700 duration-300 text-white'>{t("input-button")}</button>
      </div>
    </div>
  );
}

export default Message;
