"use client";

import { IIntlLang, IIntlTranslator } from "@/Interface";
import { CommonText, ComponentHeader, ConnectDesk } from "@/components";
import { corporateSupport } from "@/public/Data";
import { FC } from "react";
import { SupportCard } from "./SupportCard";

export const SupportBox: FC<IIntlTranslator & IIntlLang> = ({ t, lng }) => (
  <div className="w-fit md:w-[50%] flex flex-col justify-center items-start md:justify-start gap-3 md:gap-4 md:pr-5 lg:pr-0 md:pt-12 lg:pt-0">
    <ComponentHeader
      title={
        <>
          <ConnectDesk lng={lng} text="lg" /> {t("support.title")}
        </>
      }
      subTitle={t("support.subTitle")}
      position="start"
    />

    <CommonText className="max-w-[415px]">
      {t("support.supportText")}
    </CommonText>

    {corporateSupport.map((support, i) => (
      <div
        key={i}
        className={`w-full max-w-[415px] flex items-center justify-center ${
          i % 2 === 0 ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <SupportCard {...support} t={t} />
      </div>
    ))}
  </div>
);
