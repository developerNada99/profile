"use client";


import { useTranslation } from "react-i18next";

function VideoGallery() {
  const { t } = useTranslation();

  

  return (
    <div className="video-gallery bg-gray-900 pb-5" id="video">
      <h3
        className="text-white text-5xl font-normal flex justify-center items-center p-5"
        style={{ wordSpacing: "-10px" }}
      >
        <span className="text-yellow-600 font-bold">{t("tag1-video")}</span> {t("gallery")}
      </h3>
     
       
    </div>
  );
}

export default VideoGallery;
