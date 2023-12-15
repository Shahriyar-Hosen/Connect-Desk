"use client";

import { FC } from "react";
import { ComponentHeader, ConnectDesk } from "..";
import { IIntlLang, IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";

export const FeaturesHeader: FC<IIntlLang> = ({ lng }) => {
  const { t } = useTranslation(lng, "features");
  return (
    <div className="mt-12">
      <ComponentHeader
        title={t("featureHeader.checkFeatureOf")}
        subTitle={
          <span>
            <ConnectDesk lng={lng} text="lg" /> {t("featureHeader.software")}
          </span>
        }
      />
    </div>
  );
};
