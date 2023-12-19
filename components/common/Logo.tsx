"use client";

import Image from "next/image";

import { IIntlLang } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { logo, logoBn, logoSvg } from "@/public/assets";
import Link from "next/link";
import { FC } from "react";
import { ConnectDesk } from ".";

export const LogoImg: FC<IIntlLang> = ({ lng }) => (
  <Link href="/">
    <Image src={lng === "bn" ? logoBn : logoSvg} alt="" />
  </Link>
);

export const Logo: FC<IIntlLang> = ({ lng }) => {
  const { t } = useTranslation(lng, "common");

  return (
    <div className="w-fit max-w-[168px]">
      <Link href="/">
        <div
          className={`flex justify-end items-end ${
            lng === "en" ? "-mb-[12px] mr-[9%]" : "-mb-[8px] mr-[27%]"
          }`}
        >
          <Image
            src={logo}
            className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
            alt=""
          />
        </div>

        <ConnectDesk lng={lng} text="lg" className="font-exo" />

        <p
          className={`text-[8.5px] text-primary font-sans tracking-widest sm:-mt-[5px] -mt-[5px] font-semibold cursor-pointer ${
            lng === "en" ? "italic lg:text-[9.5px] " : "lg:text-[9px]"
          }`}
        >
          {t("slogan")}
        </p>
      </Link>
    </div>
  );
};
