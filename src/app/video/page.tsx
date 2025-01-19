"use client";
import { useTranslation } from "react-i18next";
import dynamic from 'next/dynamic';

// Lazy loading ReactPlayer to prevent hydration issues
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

function Video() {
  const { t } = useTranslation();

  return (
    <div className="video-gallery bg-[#333333] pb-5 h-full" id='video'>
      <h3 className="text-white text-5xl font-normal flex justify-center items-center p-5" style={{ wordSpacing: "-10px" }}>
        <span className="text-yellow-600 font-bold">{t("video-tag1")}</span> {t("video-tag2")}
      </h3>
      
      {/* Container for the large video centered */}
      <div className="flex justify-center items-center">
        <div className="w-[500px] h-[500px] m-2">
          <ReactPlayer 
            url={`/videos/video4.mp4`} 
            controls 
            width="100%" 
            height="100%" 
          />
        </div>
      </div>

      {/* Smaller videos grid */}
      <div className="flex flex-wrap justify-center">
        {[...Array(16)].map((_, index) => (
          <div key={index} className="w-56 h-56 m-2">
            <ReactPlayer 
              url={`/videos/video${index + 1}.mp4`} 
              controls 
              width="100%" 
              height="100%" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;
