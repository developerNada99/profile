"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";

export default function VideoBackground() {
  const [playing, setPlaying] = useState(Array(16).fill(false));
  const [slidesPerView, setSlidesPerView] = useState(3); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleVideoClick = (index) => {
    setPlaying((prev) => {
      const updated = Array(16).fill(false);
      updated[index] = !prev[index];
      return updated;
    });
  };

  return (
    <div className="relative w-full">
    
      <video
        className="w-full h-[600px] object-cover"
        src="/videos/video4.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>


      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-3/4">
          <Swiper spaceBetween={20} slidesPerView={slidesPerView} grabCursor={true}>
            {Array.from({ length: 16 }, (_, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <video
                    className="w-full h-[400px] object-cover rounded-lg"
                    src={`/videos/video${index + 1}.mp4`}
                    muted={!playing[index]}
                    autoPlay={playing[index]}
                    playsInline
                    controls
                  />

                  {!playing[index] && (
                    <div
                      className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg cursor-pointer"
                      onClick={() => handleVideoClick(index)}
                    ></div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
