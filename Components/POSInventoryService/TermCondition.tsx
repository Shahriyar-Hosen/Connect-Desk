"use client";

import Image from "next/image";

import {
  BackgroundImage,
  CommonText,
  ComponentHeader,
  Container,
  MainContainer,
} from "@Components/Common";
import { termCondition } from "@public/assets/images";
import { shape1 } from "@public/assets/shape";
import TermConditionCard from "./TermConditionCard";

export const TermCondition = () => (
  <MainContainer>
    <Container className="flex justify-around items-center">
      <div>
        <ComponentHeader title="Term & Condition" position="start" />

        <CommonText text="sm" className="mt-4 max-w-[373px]">
          ConnectDesk Accounting Software Helps Stay On Top Of Your Business
          Finances Without Accounting Knowledge
        </CommonText>

        <Image src={termCondition} className="max-w-[300px] mt-10" alt="" />
      </div>

      <BackgroundImage img={shape1} className="w-full max-w-[500px]">
        <div className="">
          <div className="flex justify-start items-center">
            <TermConditionCard termCondition={termCondition1} />
          </div>
          <div className="mt-[30px] flex justify-end items-center">
            <TermConditionCard termCondition={termCondition2} />
          </div>
        </div>
      </BackgroundImage>
    </Container>
  </MainContainer>
);

const termCondition1: { label: string; active?: boolean }[] = [
  {
    label: "After Sending Payment Please Confirm By Email/SMS/Phone Call",
  },
  {
    label:
      "50% Due payment For Ready Software Setup And Training With Same Day",
  },
  {
    label: "50% Advance Payment For Work Order Confirmation.",
    active: true,
  },
  {
    label:
      "If Sending Payment By Bank Please Send Account Number For Confirmation",
  },
];

const termCondition2: { label: string; active?: boolean }[] = [
  {
    label:
      "If Sending Payment By Mobile Banking Please Send Transaction ID With Account",
  },
  {
    label:
      "Yearly Service Charge 2000 Taka (This Charge Added After 1 Year Installation Day)",
  },
  {
    label:
      "Online Support Time Sunday-Thursday (10 Am to 6 Pm) Free By ( TeamViewer/Anydesk).",
  },
];
