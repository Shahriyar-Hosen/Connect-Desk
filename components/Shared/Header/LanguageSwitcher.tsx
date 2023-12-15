"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { IIntlLang } from "@/Interface";
import { languages } from "@/app/i18n/settings";
import { Button } from "@/components";
import { bn, en } from "@/public/assets";

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

  return languages
    .filter((l) => lng !== l)
    .map((l, index) => {
      return (
        <Button
          key={l}
          size="sm"
          variant="secondary"
          className="ml-2.5 capitalize"
          onClick={() => handleClick(l)}
        >
          <div className="flex gap-1">
            {index > 0 && "or"}
            <Link href={`/${l}`}>{l}</Link>
            <Image width={20} src={l === "bn" ? bn : en} alt="" />
          </div>
        </Button>
      );
    });
};
