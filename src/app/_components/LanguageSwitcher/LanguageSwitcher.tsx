"use client";

import React from "react";
import { useLanguage, Language } from "@/lib/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="px-4 py-2 rounded-lg border-2 border-[#B5862F] bg-[#B5862F] text-white font-semibold hover:bg-[#a0762a] transition-colors"
    >
      {language === "en" ? "AR" : "EN"}
    </button>
  );
}
