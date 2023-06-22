"use client";

import Image from "next/image";

import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "@Components/Common";
import { growRetailFaster } from "@public/assets/images";

export const GrowRetailFaster = () => (
  <MainContainer bg="secondary">
    <Container className="flex justify-center items-center flex-col">
      <ComponentHeader
        title="Grow Your Retail Faster With Smart POS Software"
        subTitle={
          <>
            From <ConnectDesk text="lg" />
          </>
        }
      />

      <CommonText text="sm" className="mt-4 max-w-[521px] text-center">
        ConnectDesk POS Software Helps Stay On Top Of Your Retail Business
        Finances Without Any Prior Business Knowledge
      </CommonText>

      <Image
        src={growRetailFaster}
        className="-mt-[30px] sm:-mt-[100px] md:-mt-[120px] lg:-mt-[135px] lg:-mb-16"
        alt="Grow Your Retail Faster With Smart POS Software"
      />
    </Container>
  </MainContainer>
);
