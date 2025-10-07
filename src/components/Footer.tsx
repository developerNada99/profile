"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";

const Contact = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFooter(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  if (!showFooter) return null;

  const iconClass =
    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white transition-transform duration-300 hover:scale-110";

  return (
    <div
      id="contact"
      className="p-7 bg-[#222222] flex justify-center items-center gap-4 sm:gap-6 px-6 sm:px-10"
    >
      <Link
        href="https://www.instagram.com/eng.khalifaalsaadi?igsh=YmVvM2R4aGE0d3p4"
        target="_blank"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
          <FaInstagram className={iconClass} />
        </div>
      </Link>

      <Link
        href="https://www.youtube.com/channel/UCM_n4g1tdyvGz5mob_3u6lQ"
        target="_blank"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
          <FaYoutube className={iconClass} />
        </div>
      </Link>

      <Link
        href="https://www.linkedin.com/in/khalifa-operations-engineer?originalSubdomain=ae"
        target="_blank"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
          <FaLinkedin className={iconClass} />
        </div>
      </Link>

      <Link
        href="https://www.tiktok.com/@eng.khalifaalsaadi?_t=8meE5X2kS3M&_r=1"
        target="_blank"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
          <FaTiktok className={iconClass} />
        </div>
      </Link>

      <Link
        href="https://www.snapchat.com/add/eng.khalifa2024?invite_id=3HtNpI6d&locale=en_AE&share_id=DVmmOdNWTqu3REglG9blqA&sid=849b618a579642dbb8b79d9fb6f0a3e8"
        target="_blank"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
          <FaSnapchatGhost className={iconClass} />
        </div>
      </Link>
    </div>
  );
};

export default Contact;
