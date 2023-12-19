"use client";

import { FC } from "react";
import { CartTop, FeaturesItem } from ".";
import { IIntlTranslator } from "@/Interface";

export const FeaturesCard: FC<{ features: string[] } & IIntlTranslator> = ({
  features,
  t,
}) => (
  <div className="mt-3 sm:mt-6 w-[85%] h-auto rounded-[25px]  bg-white pb-6">
    <CartTop
      title={t("packages.features")}
      height="h-[45px] sm:h-[50px]"
      text="md"
    />

    <div className="flex flex-col items-start justify-center m-3 sm:m-4 gap-1 sm:gap-2">
      {features.map((item, i) => (
        <FeaturesItem feature={t(item)} key={i} />
      ))}
    </div>
  </div>
);
