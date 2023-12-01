"use client";
import { IIntlLang, IIntlTranslator } from "@/Interface";
import { languages } from "@/app/i18n/settings";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: FC<IIntlLang> = ({ lng }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleClick = (lng: string) => {
    const newLocale = lng;

    router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));

    router.refresh();
  };

  return (
    <>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span
              key={l}
              className="rounded-full bg-primary p-2 text-white w-10 h-10"
              onClick={() => handleClick(l)}
            >
              {index > 0 && "or"}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </>
  );
};
