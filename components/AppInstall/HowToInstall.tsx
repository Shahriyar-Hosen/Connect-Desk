"use client";

import { FC } from "react";
import { CommonText } from "..";
import { IIntlTranslator } from "@/Interface";

export const HowToInstall: FC<IIntlTranslator> = ({ t }) => (
  <div className="mt-12 md:mt-16 mb-4 md:mb-6">
    <h1 className="text-lg md:text-[26px] font-semibold mb-5">
      {t("HowToInstallApp", { ns: "app-install" })}
    </h1>

    <CommonText className="max-w-[320px]">
      {t("DownloadAppFromGoogle", { ns: "app-install" })}
    </CommonText>
  </div>
);
