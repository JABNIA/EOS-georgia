import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import enLang from "../public/locales/en/header.json";
import kaLang from "../public/locales/ka/header.json";

const resources = {
  en: {
    translation: enLang,
  },
  ka: {
    translation: kaLang,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ka",

    fallbackLng: "en",
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
