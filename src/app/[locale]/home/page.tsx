"use client";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <div
      className="h-screen bg-fixed bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url(/one.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold">{t("Khalifa_en")}</h1>
        <h1 className="text-4xl font-bold">{t("Khalifa_ar")}</h1>
      </div>
    </div>
  );
};

export default Home;
