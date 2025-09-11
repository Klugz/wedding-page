"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import language_pt_br from "../public/text/pt-br.json";
import language_it_it from "../public/text/it-it.json";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  getJsonTextLanguage: (
    language: string,
    component: string,
    index: number
  ) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("pt-br");

  const getJsonTextLanguage = (
    language: string,
    component: string,
    index: number
  ) => {
    if (language === "pt-br") {
      //@ts-ignore
      return language_pt_br[component][index];
    } else {
      //@ts-ignore
      return language_it_it[component][index];
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, getJsonTextLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
