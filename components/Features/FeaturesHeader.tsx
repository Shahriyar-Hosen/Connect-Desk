"use client";

import { FC } from "react";
import { ComponentHeader, ConnectDesk } from "..";
import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";

export const FeaturesHeader = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "features");
  return (
    <div className="mt-12">
      <ComponentHeader
        title="Check Out All The Important Features Of"
        subTitle={
          <span>
            <ConnectDesk text="lg" /> Software
          </span>
        }
      />
    </div>
  );
};
