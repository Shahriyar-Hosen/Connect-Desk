"use client";

import { IIntlLang, IIntlTranslator } from "@/Interface";
import { BackgroundImage, Container } from "@/components";
import { homeSupportBg } from "@/public/assets/images";
import { FC } from "react";
import { SupportBox } from "./SupportBox";
import { SupportLeft } from "./SupportLeft";

export const Support: FC<IIntlTranslator & IIntlLang> = ({ t, lng }) => (
  <BackgroundImage img={homeSupportBg} className="my-2.5 md:my-5 min-h-full">
    <Container className="flex flex-col md:flex-row justify-center items-center gap-[5%] pt-2.5 pb-10 md:pb-16 ">
      <SupportLeft />
      <SupportBox lng={lng} t={t} />
    </Container>
  </BackgroundImage>
);
