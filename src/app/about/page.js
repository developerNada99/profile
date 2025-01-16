"use client"
import { useTranslation } from "react-i18next";
import Image from "next/image";

const About = () => {
    const { t } = useTranslation();

  return (
    <>
    <div className="about bg-[#222222] py-8 flex justify-center items-center gap-5 flex-wrap" id="about">
        <div className='image w-2/5 h-auto'>
          <Image src='/khlifa.jpg' alt='' className="w-full h-full"  height={900} width={900}/>
        </div>
        <div className='text text-center w-4/5 lg:w-2/5'>
          <h3 className="text-white text-4xl font-normal">
            <span className="text-yellow-600 font-bold">{t("About-tag")}</span> {t("Me-tag")}</h3>
          <p className="text-gray-400 text-lg mt-4">{t("about string")}</p>
        </div>
      </div>
    </>
  )
}

export default About;