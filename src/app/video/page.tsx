"use client";

import { useTranslation } from "react-i18next";

const Video = () => {
  const { t, i18n } = useTranslation();

  // التحقق من تحميل الترجمة
  if (!i18n.isInitialized) {
    return <div>Loading...</div>; // يمكن تخصيص نص التحميل حسب الحاجة
  }

  return (
    <div>
      <h1>{t("tag1-video")}</h1>
    </div>
  );
};

export default Video;
