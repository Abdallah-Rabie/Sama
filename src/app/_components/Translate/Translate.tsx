"use client";

import { useLanguage } from "@/app/_components/LanguageProvider/LanguageProvider";
import { t } from "@/lib/i18n";

export default function Translate({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const { lang } = useLanguage();
  return <span className={className}>{t(id, lang)}</span>;
}
