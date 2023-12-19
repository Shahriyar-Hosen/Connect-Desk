"use client";

import { IHeroSection } from "@/Interface";
import { heroBg } from "@/public/assets/images";
import { FC } from "react";
import { BackgroundImage, Container } from "..";
import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";

export const HeroSection: FC<IHeroSection> = ({
  image,
  mainText,
  subText,
  paragraph,
  button1,
  button2,
  pos,
  service,
  lng,
}) => (
  <BackgroundImage img={heroBg} hidden="sm">
    <Container className="relative z-10 flex flex-col-reverse md:flex-row items-start justify-center min-h-[90%] lg:pt-5 xl:pt-10">
      <HeroLeft
        mainText={mainText}
        subText={subText}
        paragraph={paragraph}
        button1={button1}
        button2={button2}
        service={service}
        pos={pos}
        lng={lng}
      />

      <HeroRight image={image} pos={pos} />
    </Container>
  </BackgroundImage>
);
