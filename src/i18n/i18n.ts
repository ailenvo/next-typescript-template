import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./en.json";
import Vietnamese from "./vi.json";

export enum CountryLanguage {
  "EN" = "en",
  "VI" = "vi",
}

const resources = {
  en: {
    translation: English,
  },
  vi: {
    translation: Vietnamese,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: CountryLanguage.EN,
  compatibilityJSON: "v3",
});

export default i18n;
