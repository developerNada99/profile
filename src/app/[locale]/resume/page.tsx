"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Resume() {
  const t = useTranslations("Education");
  const containerRef = useRef(null);
  
  // Parallax effect setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-80%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={containerRef}
      id="resume"
      className="relative bg-cover bg-center py-16 px-8 md:px-12 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('/edu.jfif')",
          y: y,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ opacity }}
      >
        <h3 className="text-white text-4xl text-center">
          {t("resume-tag1")}
          <span className="text-yellow-600 font-bold">{t("resume-tag2")}</span>
        </h3>

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          {/* Education Section */}
         <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white font-bold text-2xl p-5">{t("edu")}</h2>

            <div className="p-5 bg-[#333333]/50 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-1 text-white font-bold">
                <Image alt="" src="/date.png" width={20} height={20} />
                <span>{t("degree1_date")}</span>
              </div>
              <h4 className="text-yellow-600 text-2xl mt-2 font-thin">
                {t("degree1_title")}
              </h4>
              <p className="text-[#d3d3d3] mt-2">{t("degree1_desc")}</p>
            </div>

            <div className="p-5 bg-[#333333]/50 rounded-xl mt-5 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-white font-bold">
                <Image alt="" src="/date.png" width={20} height={20} />
                <span>{t("degree2_date")}</span>
              </div>
              <h4 className="text-yellow-600 text-2xl mt-2 font-thin">
                {t("degree2_title")}
              </h4>
              <p className="text-[#d3d3d3] mt-2">{t("degree2_desc")}</p>
            </div>
          </motion.div>


          {/* Experience Section */}
         <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white font-bold text-2xl p-5">{t("exper")}</h2>

            <div className="p-5 bg-[#333333]/50 rounded-xl backdrop-blur-sm">
              <span className="text-white font-bold text-lg">
                {t("exper1_title")}
              </span>
              <h4 className="text-yellow-600 text-2xl mt-2 font-thin">
                {t("exper1_company")}
              </h4>
              <p className="text-[#d3d3d3] mt-2">{t("exper1_desc")}</p>
            </div>

            <div className="p-5 bg-[#333333]/50 rounded-xl mt-5 backdrop-blur-sm">
              <span className="text-white font-bold text-lg">
                {t("exper2_title")}
              </span>
              <h4 className="text-yellow-600 text-2xl mt-2 font-thin">
                {t("exper2_company")}
              </h4>
              <p className="text-[#d3d3d3] mt-2">{t("exper2_desc")}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;