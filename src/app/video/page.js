"use client"
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
function Video() {
    const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState('HV0JS4WiM4k');

  const videos = [
    { title: t('tag1-video'), id: 'HV0JS4WiM4k' },
    { title: t('tag2-video'), id: 'VFYoStUWML0' },
    { title: t('tag3-video'), id: 'vB3oAdgKW70' },
    { title: t('tag4-video'), id: 'Mo1l9bEql7Q' },
    { title: t('tag5-video'), id: 'TCwgfOrFYKU' },
    { title: t("tag6-video"), id: 't34SRDYtTiQ' },
    { title: t("tag7-video"), id: 'rvonT2Ws21M' },
    { title: t("tag8-video"), id: 'DmVzHkngdMs' },
    { title: t("tag9-video"), id: 'PTcRAovVpKE' },
    { title: t("tag10-video"), id: '7pS2-EsE1Vw' },
    {title: t("tag11-video"), id: 'OAyVg-mua1s' },
    {title: t("tag12-video"), id: 'jogRfmcAudM' },
    {title: t("tag13-video"), id: 'OiYFabeN-ls' },
  ];

  const handleVideoClick = (id) => {
    setSelectedVideo(id); 
  };

  return (
    <div className="video-gallery bg-[#333333] pb-5" id='video'>
        <h3 className="text-white text-5xl font-normal flex justify-center items-center p-5" style={{wordSpacing: "-10px"}}>
            <span className="text-yellow-600 font-bold">{t("video-tag1")}</span> {t("video-tag2")}</h3>
     <div className='flex justify-start items-center max-md:flex-col'>
      <div className="video-list w-1/3 overflow-auto p-4 h-[500px] max-md:w-full" style={{scrollbarColor: "#686868 #424242",scrollbarWidth: "thin"}}>
        <ul>
          {videos.map((video, index) => (
            <li key={index} className="mb-4 cursor-pointer" onClick={() => handleVideoClick(video.id)}>
              <div className="flex items-center gap-4">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                  alt={video.title}
                  className="w-1/2 h-24 object-cover"
                />
                <p className='w-1/2 text-gray-400'>{video.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Display Section */}
      <div className="video-display w-2/3 p-4 max-md:w-full">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Selected Video"
        ></iframe>
      </div>
       </div>
    </div>
  );
}

export default Video;
