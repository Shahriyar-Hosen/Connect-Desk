"use client";

import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";
import { heroBg } from "@public/assets/images";
import Image from "next/image";
import { IHeroSection } from "@Interface/common/IHeroSection";
import { Container } from "@Components/Common";
const HeroSection = ({
  image,
  mainText,
  subText,
  paragraph,
  button,
}: IHeroSection) => {
  return (
    <div className={` relative min-h-[100%]`}>
      <div className="absolute w-full lg:inset-0">
        <Image src={heroBg} alt="background image" fill />
      </div>
      <Container className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center h-[80%]">
        {/* <div className="w-full"> */}
        <HeroLeft
          mainText={mainText}
          subText={subText}
          paragraph={paragraph}
          button={button}
        />
        {/* </div>
        <div className="w-full"> */}
        <HeroRight image={image} />
      </Container>
    </div>
  );
};

export default HeroSection;
