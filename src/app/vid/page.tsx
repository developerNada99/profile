"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState("HV0JS4WiM4k");
  const { t } = useTranslation();

  const videos = [
    { title: t("tag1-video"), id: "HV0JS4WiM4k" },
    { title: "Tag 2 Video", id: "VFYoStUWML0" },
    { title: "Tag 3 Video", id: "vB3oAdgKW70" },
    { title: "Tag 4 Video", id: "Mo1l9bEql7Q" },
    { title: "Tag 5 Video", id: "TCwgfOrFYKU" },
    { title: "Tag 6 Video", id: "t34SRDYtTiQ" },
    { title: "Tag 7 Video", id: "rvonT2Ws21M" },
    { title: "Tag 8 Video", id: "DmVzHkngdMs" },
    { title: "Tag 9 Video", id: "PTcRAovVpKE" },
    { title: "Tag 10 Video", id: "7pS2-EsE1Vw" },
    { title: "Tag 11 Video", id: "OAyVg-mua1s" },
    { title: "Tag 12 Video", id: "jogRfmcAudM" },
    { title: "Tag 13 Video", id: "OiYFabeN-ls" },
  ];

  const handleVideoClick = (id) => {
    setSelectedVideo(id);
  };

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
          <ul>
            {videos.map((video, index) => (
              <li key={index} className="mb-4 cursor-pointer" onClick={() => handleVideoClick(video.id)}>
                <div className="flex items-center gap-4">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                    alt={video.title}
                    className="w-1/2 h-24 object-cover"
                  />
                  <p className="w-1/2 text-gray-400">{video.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

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

export default VideoGallery;
