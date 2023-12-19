"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { roundArrow } from "@/public/assets/icon";
import { Countdown, Logo } from "..";
import { IIntlLang } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";

export const ComingSoon: FC<IIntlLang> = ({ lng }) => {
  const { t } = useTranslation(lng, "common");
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-10 lg:gap-12">
        <Logo lng={lng} />

        <h1 className="text-3xl lg:text-[48px] font-semibold text-primary text-center">
          {t("comingSoon")}
        </h1>

        <Countdown day="01" month="12" year="2024" />

        <Link href="/" className="flex gap-3">
          <Image src={roundArrow} alt="" />
          <p className="cursor-pointer">{t("backToHome")}</p>
        </Link>
      </div>
    </main>
  );
};
