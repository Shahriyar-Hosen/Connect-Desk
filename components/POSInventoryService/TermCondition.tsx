"use client";

import { termConditionData } from "@/public/Data";
import { termCondition } from "@/public/assets/images";
import { shape1 } from "@/public/assets/shape";
import Image from "next/image";
import { FC } from "react";
import {
  BackgroundImage,
  CommonText,
  ComponentHeader,
  Container,
  MainContainer,
} from "..";
import { TermConditionCard } from "./TermConditionCard";

export const TermCondition: FC = () => (
  <MainContainer>
    <Container className="flex flex-col  justify-center lg:flex-row lg:justify-around items-center gap-8">
      <div>
        <ComponentHeader title="Term & Condition" position="start" />

        <CommonText text="sm" className="mt-4 max-w-[373px]">
          ConnectDesk Accounting Software Helps Stay On Top Of Your Business
          Finances Without Accounting Knowledge
        </CommonText>

        <Image src={termCondition} className="max-w-[300px] mt-10" alt="" />
      </div>

      <BackgroundImage
        img={shape1}
        className="w-full max-w-[500px]"
        hidden="sm"
      >
        {termConditionData.map((items, i) => (
          <div
            key={i}
            className={`flex ${
              i % 2 === 0 ? "justify-start" : "justify-end mt-[30px]"
            } items-center`}
          >
            <TermConditionCard termCondition={items} />
          </div>
        ))}
      </BackgroundImage>
    </Container>
  </MainContainer>
);
