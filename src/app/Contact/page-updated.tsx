"use client";

import React from 'react'
import { useLanguage } from '@/lib/LanguageContext';

export default function page() {
  const { t } = useLanguage();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t.contact.pageTitle}</h1>
        <p className="text-lg text-gray-600">Coming Soon...</p>
      </div>
    </div>
  )
}
