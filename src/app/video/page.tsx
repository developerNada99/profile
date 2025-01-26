"use client"
import { useTranslation } from "react-i18next";

const Video = () => {
    const { t } = useTranslation();

  return (
    <div>{t("tag1-video")}</div>
  )
}

export default Video