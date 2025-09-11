"use client";

import { createContext, useContext } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  getJsonTextLanguage: (
    language: string,
    component: string,
    index: number
  ) => string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageContext.Provider");
  }
  return context;
};
