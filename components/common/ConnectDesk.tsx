"use client";

import { FC } from "react";

import { IClassName, IIntlLang, ITextAndFont } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { twMerge } from "tailwind-merge";

export const ConnectDesk: FC<ITextAndFont & IClassName & IIntlLang> = ({
  className,
  font,
  text,
  lng,
}) => {
  const { t } = useTranslation(lng, "common");

  return (
    <span
      className={twMerge(
        `${
          (text === "md" && "text-xl") ||
          (text === "lg" && `text-[24px] lg:text-[28px]`) ||
          (text === "xl" && "text-[26px] md:text-[28px] lg:text-[32px]")
        } 
      ${
        (font === "poppins" && "font-poppins") ||
        (font === "exo" && "font-exo") ||
        (font === "sans" && "font-sans")
      }
      
    text-secondary font-semibold`,
        className
      )}
    >
      {t("connect")}
      <span className="text-primary ">{t("desk")}</span>
    </span>
  );
};
