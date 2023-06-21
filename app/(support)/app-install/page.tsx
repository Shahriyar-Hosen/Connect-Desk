"use client";

import {
  AppDownloadImg,
  CommonText,
  Container,
  MainContainer,
} from "@Components/Common";
import { appInstalImg } from "@public/assets/images";
import Image from "next/image";

const AppInstall = () => (
  <MainContainer>
    <Container className="flex justify-center items-start gap-[15%]">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-4xl font-semibold mb-6">Download App</h1>

        <CommonText className="max-w-[320px]">
          Now getting our services easily with our mobile app. Download the app
          and handle your business in your hand
        </CommonText>

        <AppDownloadImg className="mt-10" />

        <div className="mt-16 mb-6">
          <h1 className="text-[26px] font-semibold mb-5">
            How To Install The App?
          </h1>

          <CommonText className="max-w-[320px]">
            Download the app from Google Play Store / Apple App Store, and enjoy
            7 days free trial.
          </CommonText>
        </div>

        <div className="max-w-[431px]">
          <CommonText className="font-medium">
            How to create an account:
          </CommonText>

          <div className="mt-4 flex flex-col justify-center items-start gap-1">
            {createAccount.map((item) => (
              <div key={item} className="flex justify-start items-center gap-2">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <CommonText>{item}</CommonText>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Image src={appInstalImg} alt="" />
    </Container>
  </MainContainer>
);

export default AppInstall;

const createAccount = [
  "At first download and install the app.",
  "  After installing the app, create a new account by signing up.",
  " By verifying your account, your can start to use your account.",
];
