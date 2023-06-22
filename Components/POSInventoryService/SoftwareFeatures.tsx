"use client";

import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "@Components/Common";
import { posInventoryServicesData } from "@public/Data";
import Image from "next/image";

export const SoftwareFeatures = () => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            <ConnectDesk text="xl" /> POS Software
          </>
        }
        subTitle="Features At A Glance"
      />

      <section className="grid grid-cols-5 gap-y-11 gap-x-7 justify-items-center w-full max-w-[1080px] mx-auto mt-[50px]">
        {posInventoryServicesData.map(({ icon, title }, i) => (
          <div
            key={i}
            className="w-[190px] p-6 flex flex-col justify-center items-center gap-[30px] border border-base-100 rounded-xl shadow-md"
          >
            <Image src={icon} alt="" />
            <CommonText className="font-semibold">{title}</CommonText>
          </div>
        ))}
      </section>
    </Container>
  </MainContainer>
);
