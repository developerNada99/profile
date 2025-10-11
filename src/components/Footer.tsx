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
    "text-lg text-white transition-transform duration-300 hover:scale-110";

  return (
    <div
      id="contact"
      className="p-6 bg-[#222222] flex flex-col justify-center items-center gap-6 px-8"
    >
      {/* Icons Section */}
      <div className="flex justify-center items-center gap-4">
        <Link
          href="https://www.instagram.com/eng.khalifaalsaadi?igsh=YmVvM2R4aGE0d3p4"
          target="_blank"
        >
          <div className="w-9 h-9 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
            <FaInstagram className={iconClass} />
          </div>
        </Link>

        <Link
          href="https://www.youtube.com/channel/UCM_n4g1tdyvGz5mob_3u6lQ"
          target="_blank"
        >
          <div className="w-9 h-9 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
            <FaYoutube className={iconClass} />
          </div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/khalifa-operations-engineer?originalSubdomain=ae"
          target="_blank"
        >
          <div className="w-9 h-9 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
            <FaLinkedin className={iconClass} />
          </div>
        </Link>

        <Link
          href="https://www.tiktok.com/@eng.khalifaalsaadi?_t=8meE5X2kS3M&_r=1"
          target="_blank"
        >
          <div className="w-9 h-9 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
            <FaTiktok className={iconClass} />
          </div>
        </Link>

        <Link
          href="https://www.snapchat.com/add/eng.khalifa2024?invite_id=3HtNpI6d&locale=en_AE&share_id=DVmmOdNWTqu3REglG9blqA&sid=849b618a579642dbb8b79d9fb6f0a3e8"
          target="_blank"
        >
          <div className="w-9 h-9 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
            <FaSnapchatGhost className={iconClass} />
          </div>
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="text-center text-gray-400 text-sm">
        Made by{" "}
        <a
          href="https://wa.me/966535426221"
          target="_blank"
          className="font-semibold hover:underline"
        >
          Nada Ahmed
        </a>
      </footer>
    </div>
  );
};

export default Contact;
