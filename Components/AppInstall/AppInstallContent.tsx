"use client";

import { AppDownloadImg, CommonText } from "@Components/Common";
import { createAccount } from "@public/Data";

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

    <div className="mt-12 md:mt-16 mb-4 md:mb-6">
      <h1 className="text-lg md:text-[26px] font-semibold mb-5">
        How To Install The App?
      </h1>

      <CommonText className="max-w-[320px]">
        Download the app from Google Play Store / Apple App Store, and enjoy 7
        days free trial.
      </CommonText>
    </div>

    <div className="max-w-[431px]">
      <CommonText className="font-medium">How to create an account:</CommonText>

      <div className="mt-3 md:mt-4 flex flex-col justify-center items-start gap-1">
        {createAccount.map((item) => (
          <div key={item} className="flex justify-start items-center gap-2">
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            <CommonText>{item}</CommonText>
          </div>
        ))}
      </div>
    </div>
  </div>
);
