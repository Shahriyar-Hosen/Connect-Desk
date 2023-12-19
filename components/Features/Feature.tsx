"use client";

import { IFeaturesPage, IIntlLang, IIntlTranslator } from "@/Interface";
import Image from "next/image";
import { FC } from "react";
import { CommonText, ComponentHeader } from "..";

export const Feature: FC<IFeaturesPage & IIntlTranslator & IIntlLang> = ({
  id,
  image,
  paragraph,
  title,
  t,
  lng,
}) => (
  <div
    className={`flex flex-col ${
      id % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"
    } md:gap-14 lg:gap-24 justify-center md:mb-20 px-10`}
  >
    <div>
      <Image
        src={image}
        alt={title.second}
        className="w-full max-w-[530px] mx-auto"
      />
    </div>
    <div
      className={`flex flex-col justify-center mx-auto md:mx-0 mt-8 md:mt-0 ${
        lng === "bn" ? "max-w-[350px]" : "max-w-[342px]"
      }`}
    >
      <ComponentHeader
        position="start"
        title={
          <>
            {t(title.first)}{" "}
            <span className="text-primary">{t(title.second)}</span>{" "}
            <span className="text-secondary">{t(title.third)}</span>
          </>
        }
      />
      <br />
      <CommonText className="max-w-[350px]">{t(paragraph)}</CommonText>
    </div>
  </div>
);
