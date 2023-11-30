"use client";

import { BackgroundImage, Container } from "@/components";
import { homeSupportBg } from "@/public/assets/images";
import { FC } from "react";
import { SupportBox } from "./SupportBox";
import { SupportLeft } from "./SupportLeft";
import { IIntlComponentParams } from "@/Interface";

export const Support: FC<IIntlComponentParams> = ({ t }) => (
  <BackgroundImage img={homeSupportBg} className="my-2.5 md:my-5 min-h-full">
    <Container className="flex flex-col md:flex-row justify-center items-center gap-[5%] pt-2.5 pb-10 md:pb-16 ">
      <SupportLeft />
      <SupportBox t={t} />
    </Container>
  </BackgroundImage>
);
