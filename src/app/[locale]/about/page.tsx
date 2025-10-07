"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const About = () => {
  const t = useTranslations("About");

  return (
    <div
      className="about bg-[#222222] pb-24 pt-24 flex justify-center items-center gap-5 flex-wrap h-full"
      id="about"
    >
      {/* صورة ودواير */}
      <motion.div
        className="image w-4/5 md:w-2/5 h-auto relative flex justify-center items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* الدائرة الكبيرة الصفراء */}
        <div
          className="absolute rounded-full bg-yellow-600 z-10
                w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96
                top-0 left-1 md:top-3"
        />

        {/* الدائرة الصغيرة الرمادية */}
        <div
          className="absolute rounded-full bg-[#525252] z-10
                w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64
                -bottom-6 sm:-bottom-8 md:-bottom-10
                -right-4 sm:-right-6 md:-right-9"
        />

        {/* الصورة */}
        <Image
          src="/About.png"
          alt={"image"}
          className="relative z-30 w-3/4 sm:w-4/5 md:w-full h-auto object-contain"
          height={900}
          width={900}
        />
      </motion.div>

      {/* النص */}
      <motion.div
        className="text text-center w-4/5 lg:w-2/5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <h3 className="text-white text-4xl font-normal">
          <span className="text-yellow-600 font-bold">{t("About-tag")}</span>
          {t("Me-tag")}
        </h3>
        <p className="text-gray-400 text-lg mt-4">{t("about string")}</p>
      </motion.div>
    </div>
  );
};

export default About;
