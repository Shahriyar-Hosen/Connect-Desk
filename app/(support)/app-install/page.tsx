"use client";

import { CommonText, Container, MainContainer } from "@Components/Common";
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
      </div>

      <Image src={appInstalImg} alt="" />
    </Container>
  </MainContainer>
);

export default AppInstall;
