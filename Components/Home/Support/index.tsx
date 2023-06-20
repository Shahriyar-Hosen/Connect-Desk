"use client";

import Image from "next/image";

import {
  BackgroundImage,
  ComponentHeader,
  ConnectDesk,
  Container,
} from "@Components/Common";
import { homeSupportBg, supportLeftImg } from "@public/assets/images";

const Support = () => (
  <BackgroundImage img={homeSupportBg} className="my-2.5 md:my-5 min-h-full">
    <Container className="flex flex-col md:flex-row justify-center items-center gap-2.5 pt-2.5 pb-10 md:pb-16 ">
      <div className="w-full md:w-[50%] flex justify-center items-center">
        <Image
          src={supportLeftImg}
          className="w-[85%] sm:w-[60%] md:w-full"
          alt=""
        />
      </div>
      <div className="w-full md:w-[50%] flex justify-center items-center md:justify-start">
        <ComponentHeader
          title={
            <>
              <ConnectDesk text="lg" /> Deliver A
            </>
          }
          subTitle="Corporate Support For All Time"
          position="start"
        />
      </div>
    </Container>
  </BackgroundImage>
);

export default Support;
