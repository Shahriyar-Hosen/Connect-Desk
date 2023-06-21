"use client";

import { BackgroundImage, Container } from "@Components/Common";
import { IHeroSection } from "@Interface/common/IHeroSection";
import { heroBg } from "@public/assets/images";
import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";

const HeroSection = ({
  image,
  mainText,
  subText,
  paragraph,
  button1,
  button2,
  pos,
}: IHeroSection) => (
  <BackgroundImage img={heroBg} hidden="sm">
    <Container className="relative z-10 flex flex-col-reverse md:flex-row items-start justify-center min-h-[90%] lg:pt-5 xl:pt-10">
      <HeroLeft
        mainText={mainText}
        subText={subText}
        paragraph={paragraph}
        button1={button1}
        button2={button2}
      />

      <HeroRight image={image} pos={pos} />
    </Container>
  </BackgroundImage>
);

export default HeroSection;
