"use client"
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { useEffect } from "react";
import cookie from 'js-cookie';
import dynamic from 'next/dynamic';
import Home from './home/page';
import About from "./about/page";
import Button from "./button/page";
import Video from "./video/page";
import Chatbot from "./ai/page";
import Message from "./message/page";

// Initialize i18next
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        'cookie',
        'htmlTag',
        'localStorage',
        'sessionStorage',
        'navigator',
        'path',
        'subdomain',
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: '/locale/{{lng}}/translation.json',
    }
  });

function Page() {
  const { t } = useTranslation();
  
  const lng = cookie.get("i18next") || "en";
  
  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng]);

  return (
    <>
      <Home />
      <About />
      <Button />
      <Video />
      <Chatbot />
      <Message/>
    </>
  );
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });
