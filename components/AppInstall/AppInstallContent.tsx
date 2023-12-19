"use client";

import { FC } from "react";
import { AppDownloadImg, CommonText, CreateAccount, HowToInstall } from "..";
import { IIntlTranslator } from "@/Interface";

export const AppInstallContent: FC<IIntlTranslator> = ({ t }) => (
  <div className="flex flex-col justify-center items-start">
    <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 mt-4 md:mt-0">
      {t("DownloadApp", { ns: "app-install" })}
    </h1>

    <CommonText className="max-w-[320px]">
      {t("AboutApp", { ns: "app-install" })}
    </CommonText>

    <AppDownloadImg className="mt-7 md:mt-10" />
    <HowToInstall t={t} />
    <CreateAccount t={t} />
  </div>
);
