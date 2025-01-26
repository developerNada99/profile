"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

export default function VideoBackground() {
  const [playing, setPlaying] = useState(Array(16).fill(false)); 

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
      <div className="absolute inset-0 z-20 flex items-center justify-center cursor-grab">
        <div className="w-3/4">
          <Swiper
            spaceBetween={20} 
            slidesPerView={3} 
            centeredSlides={false} 
            grabCursor={true} 
          >
            {/* Slides */}
            {Array.from({ length: 16 }, (_, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
  
                  <video
                    className="w-full h-[200px] object-cover rounded-lg"
                    src={`/videos/video${index + 1}.mp4`}
                    muted={!playing[index]} 
                    autoPlay={playing[index]} 
                    playsInline
                    onClick={() => handleVideoClick(index)} 
                    controls={playing[index]} 
                  />
                  
  
                  {!playing[index] && (
                    <div
                      className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg cursor-grab"
                      onClick={() => handleVideoClick(index)} 
                    >
                      <button className="text-white text-lg font-bold cursor-pointer">
                
                      </button>
                    </div>
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
