"use client";
import { useTranslation } from "react-i18next";

function Video() {
  const { t } = useTranslation();




  return (
    <div className="video-gallery bg-[#333333] pb-5 h-screen" id='video'>
      <h3 className="text-white text-5xl font-normal flex justify-center items-center p-5" style={{ wordSpacing: "-10px" }}>
        <span className="text-yellow-600 font-bold">{t("video-tag1")}</span> {t("video-tag2")}
      </h3>
      
      </div>
  );
}

export default Video;
