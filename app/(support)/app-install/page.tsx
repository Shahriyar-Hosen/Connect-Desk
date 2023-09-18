"use client";

import { AppInstallContent, Container, MainContainer } from "@/components";
import { appInstalImg } from "@/public/assets/images";
import Image from "next/image";

const AppInstall = () => (
  <MainContainer>
    <Container className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-[15%] md:gap-[5%] xl:gap-[15%]">
      <AppInstallContent />

      <Image
        src={appInstalImg}
        className="w-[70%] sm:w-[80%] md:w-[50%] xl:w-fit"
        alt=""
      />
    </Container>
  </MainContainer>
);

export default AppInstall;

const createAccount = [
  "At first download and install the app.",
  "  After installing the app, create a new account by signing up.",
  " By verifying your account, your can start to use your account.",
];
