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
    // لتجنب مشكلة الـ hydration، نخلي الظهور يحصل بعد ما المكون يركب فعلاً
    const timeout = setTimeout(() => {
      setShowFooter(true);
    }, 300); // تأخير بسيط بدون تعارض مع SSR
    return () => clearTimeout(timeout);
  }, []);

  if (!showFooter) return null;

  return (
    <div
      id="contact"
      className="p-7 bg-[#222222] flex justify-center items-center gap-6 px-10"
    >
      <Link
        href="https://www.instagram.com/eng.khalifaalsaadi?igsh=YmVvM2R4aGE0d3p4"
        target="_blank"
      >
        <div className="w-14 h-14 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
          <FaInstagram size={28} color="white" />
        </div>
      </Link>

      <Link
        href="https://www.youtube.com/channel/UCM_n4g1tdyvGz5mob_3u6lQ"
        target="_blank"
      >
        <div className="w-14 h-14 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
          <FaYoutube size={28} color="white" />
        </div>
      </Link>

      <Link
        href="https://www.linkedin.com/in/khalifa-operations-engineer?originalSubdomain=ae"
        target="_blank"
      >
        <div className="w-14 h-14 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
          <FaLinkedin size={28} color="white" />
        </div>
      </Link>

      <Link
        href="https://www.tiktok.com/@eng.khalifaalsaadi?_t=8meE5X2kS3M&_r=1"
        target="_blank"
      >
        <div className="w-14 h-14 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
          <FaTiktok size={28} color="white" />
        </div>
      </Link>

      <Link
        href="https://www.snapchat.com/add/eng.khalifa2024?invite_id=3HtNpI6d&locale=en_AE&share_id=DVmmOdNWTqu3REglG9blqA&sid=849b618a579642dbb8b79d9fb6f0a3e8"
        target="_blank"
      >
        <div className="w-14 h-14 bg-[#333333] rounded-full flex justify-center items-center hover:bg-yellow-600 transition duration-300">
          <FaSnapchatGhost size={28} color="white" />
        </div>
      </Link>
    </div>
  );
};

export default Contact;
