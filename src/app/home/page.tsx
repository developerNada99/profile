"use client"
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(/one.jpg)', // Path to the image in the public folder
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-white text-center">
        {/* Ensure both translations are available and correctly used */}
        <h1 className="text-4xl font-bold">{t("Khalifa_en")}</h1>
        <h1 className="text-4xl font-bold">{t("Khalifa_ar")}</h1>
      </div>
    </div>
  )
}

export default Home;
