"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const Message = () => {
  const t = useTranslations("Contact");

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div
      ref={containerRef}
      className="relative flex justify-center items-center h-screen overflow-hidden px-4"
    >
      {/* خلفية الصورة مع تأثير parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        <Image
          src="/contact.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* الطبقة الغامقة فوق الصورة */}
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* المحتوى */}
      <motion.div
        className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center gap-5 bg-[#333333]/60 rounded-2xl backdrop-blur-md p-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ opacity }}
      >
        <motion.h2
          className="font-bold text-4xl md:text-3xl sm:text-2xl text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t("Get in Touch")}
        </motion.h2>

        <motion.input
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full h-10 mb-4 p-4 outline-none bg-[#e6e6e6] rounded-2xl"
          type="text"
          placeholder={t("input-name")}
          name="name"
        />

        <motion.input
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full h-10 mb-4 p-4 outline-none bg-[#e6e6e6] rounded-2xl"
          type="email"
          name="email"
          placeholder={t("input-email")}
        />

        <motion.textarea
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-24 mb-4 p-4 outline-none bg-[#e6e6e6] rounded-2xl w-full resize-none"
          placeholder={t("input-message")}
        ></motion.textarea>

        <button className="bg-yellow-600 w-full sm:w-fit text-white hover:bg-transparent border-yellow-600 border py-3 px-10 rounded-full font-semibold transition duration-300">
          {t("input-button")}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Message;
"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const Message = () => {
    const t = useTranslations("Contact");
  
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div 
      ref={containerRef}
      className="relative flex justify-center items-center max-lg:flex-col h-screen overflow-hidden"
    >
      {/* خلفية الصورة مع تأثير parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        <Image
          src="/contact.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* الطبقة الغامقة فوق الصورة */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </motion.div>

      {/* المحتوى */}
      <motion.div 
        className="relative z-10 w-1/2 flex flex-col justify-center my-24 items-center gap-5 max-md:w-full max-md:mt-5 max-lg:w-full p-5 bg-[#333333]/50 rounded-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ opacity }}
      >
        <motion.h2 
          className="font-bold text-4xl text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
         {t("Get in Touch")}
        </motion.h2>
        
        <motion.input
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full h-10 mb-4 p-4 outline-none bg-[#e6e6e6] rounded-2xl"
          type="text"
          placeholder={t('input-name')}
          name="name"
        />
        
        <motion.input
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full h-10 mb-4 p-4 outline-none bg-[#e6e6e6] rounded-2xl"
          type="email"
          name="email"
          placeholder={t('input-email')}
        />
        
        <motion.textarea
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full h-24 mb-4 p-4 outline-none bg-[#e6e6e6] rounded-2xl"
          placeholder={t('input-message')}
        ></motion.textarea>
        
        <button
          className="bg-yellow-600 w-full sm:w-fit text-white hover:bg-transparent border-yellow-600 border py-3 px-6 sm:px-10 rounded-full font-semibold transition duration-300 mb-12">
          {t("input-button")}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Message;
