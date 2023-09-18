"use client";

import { AppDownloadImg, CommonText, CreateAccount, HowToInstall } from "..";

export const AppInstallContent = () => (
  <div className="flex flex-col justify-center items-start">
    <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 mt-4 md:mt-0">
      Download App
    </h1>

    <CommonText className="max-w-[320px]">
      Now getting our services easily with our mobile app. Download the app and
      handle your business in your hand
    </CommonText>

    <AppDownloadImg className="mt-7 md:mt-10" />
    <HowToInstall />
    <CreateAccount />
  </div>
);
