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
      <div className="flex justify-start items-center max-md:flex-col">
        <div
          className="video-list w-1/3 overflow-auto p-4 h-[500px] max-md:w-full"
          style={{ scrollbarColor: "#686868 #424242", scrollbarWidth: "thin" }}
        >
          
        </div>

        <div className="video-display w-2/3 p-4 max-md:w-full">
          <video className="rounded-xl shadow-lg" controls width="80%">
            <source src="/videos/video1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        </div>
      </div>
    </div>
  );
}

export default VideoGallery;
