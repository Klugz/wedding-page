"use client";

import { useState, useEffect } from "react";
import { libreBaskerville, amsterdamThreeSlant } from "../styles/fonts/fonts";
import "./globals.css";
import { LanguageContext } from "../utils/language";
import language_pt_br from "../public/text/pt-br.json";
import language_it_it from "../public/text/it-it.json";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang={language}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${libreBaskerville.className} ${amsterdamThreeSlant.variable}`}
      >
        <LanguageContext.Provider
          value={{ language, setLanguage, getJsonTextLanguage }}
        >
          {children}
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
