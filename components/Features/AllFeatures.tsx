"use client";

import { IIntlLang } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { features } from "@/public/Data";
import { FC } from "react";
import { MainContainer } from "..";
import { Feature } from "./Feature";

export const AllFeatures: FC<IIntlLang> = ({ lng }) => {
  const { t } = useTranslation(lng, "features");
  return (
    <MainContainer isRemoveMargin>
      {features.map((feature) => (
        <Feature lng={lng} key={feature.id} {...feature} t={t} />
      ))}
    </MainContainer>
  );
};
