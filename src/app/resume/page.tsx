"use client";
import dynamic from "next/dynamic"; 
import Image from "next/image";
import { useTranslation } from "react-i18next";

function Resume() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#222222] p-12" id="resume">
      <h3 className="text-white text-4xl text-center">
        {t("resume-tag1")}
        <span className="text-yellow-600 font-bold">{t("resume-tag2")}</span>
      </h3>
      <div className="flex flex-col lg:flex-row gap-10 h-full mt-5">
        {/* Section: Education */}
        <div>
          <h2 className="text-white font-bold text-2xl p-5">{t("Education")}</h2>
          <div className="p-5 bg-[#333333] rounded-xl">
            <div className="flex items-center gap-1 text-white font-bold">
              <Image alt="" src="/date.png" width={20} height={20} />
              <span>Jun 2020 - Jan 2024</span>
            </div>
            <h4 className="text-yellow-600 text-2xl mt-2 font-thin">
              Bachelor of Engineering - BE, Mechanical Engineering from Liwa College
            </h4>
            <p className="text-[#858585] mt-2">
              Liwa College has been a cornerstone of higher education in the emirate of Abu Dhabi,
              nurturing potential and supplying the UAE labour market with skilled professionals.
            </p>
          </div>
          <div className="p-5 bg-[#333333] rounded-xl mt-5">
            <div className="flex items-center gap-1 text-white font-bold">
              <Image alt="" src="/date.png" width={20} height={20} />
              <span>Sep 2007 - Sep 2010</span>
            </div>
            <h4 className="text-yellow-600 text-2xl mt-2 font-thin">
              Diploma, Mechanical Maintenance from Higher Colleges of Technology
            </h4>
            <p className="text-[#858585] mt-2">
              The Higher Colleges of Technology (HCT) is the UAE’s largest applied higher educational
              institution, with over 25,000 students attending 16 modern, technology-oriented campuses.
            </p>
          </div>
        </div>

        {/* Section: Experience */}
        <div>
          <h2 className="text-white font-bold text-2xl p-5">{t("Experience")}</h2>
          <div className="p-5 bg-[#333333] rounded-xl">
            <span className="text-white font-bold text-lg">Operation Foreman</span>
            <h4 className="text-yellow-600 text-2xl mt-2 font-thin">
              Abu Dhabi Company for Onshore Oil Operations
            </h4>
            <p className="text-[#858585] mt-2">
              10+ years of consistent experience with Abu Dhabi Company for Onshore Oil Operations
              as an Operation Foreman. I was appointed to manage W.I installations and equipment,
              as a part of the enhanced oil recovery system.
            </p>
          </div>
          <div className="p-5 bg-[#333333] rounded-xl mt-5">
            <span className="text-white font-bold text-lg">Educational Consultant</span>
            <h4 className="text-yellow-600 text-2xl mt-2 font-thin">Training Center</h4>
            <p className="text-[#858585] mt-2">
              During this employment as an Educational Consultant, I was accountable for examining
              training material and advising improvement. With the utilization of strong strategic
              planning skills, I have formulated strategic plans as well as conceptualized and
              designed a lecture hall layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// تصدير المكون بعد التحميل الديناميكي
export default dynamic(() => Promise.resolve(Resume), { ssr: false });
