"use client"
import { useTranslations } from "next-intl";

const Button = () => {
  const t = useTranslations("Message");

  return (
    <div className='h-full py-14 text-center bg-[#222222]'>
            <div className=' inset-0 flex flex-col justify-center items-center z-20 max-md:text-center'>
        <h2 className='font-bold text-4xl text-white max-md:text-3xl'>{t("Learn More About the World of Petroleum Engineering")}</h2>
        <button
          className="bg-yellow-600 mt-5 w-full sm:w-fit text-white hover:bg-transparent border-yellow-600 border py-3 px-6 sm:px-10 rounded-full font-semibold transition duration-300 mb-12">
          {t("Set Out")}
        </button>
      </div>
    </div>
  );
}

export default Button;
