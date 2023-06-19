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
  button,
}: IHeroSection) => (
  <BackgroundImage img={heroBg} hidden="md">
    <Container className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center h-[90%]">
      <HeroLeft
        mainText={mainText}
        subText={subText}
        paragraph={paragraph}
        button={button}
      />

      <HeroRight image={image} />
    </Container>
  </BackgroundImage>
);

export default HeroSection;
