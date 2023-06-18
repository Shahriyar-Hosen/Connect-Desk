"use client";

import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";
import { heroBg } from "@public/assets/images";
import Image from "next/image";
import { IHeroSection } from "@Interface/common/IHeroSection";
const HeroSection = ({
  image,
  mainText,
  subText,
  paragraph,
  button,
}: IHeroSection) => {
  return (
    <div className={` relative h-[80vh] md:h-[90vh]  `}>
      <div className="absolute w-full lg:inset-0 -z-20">
        <Image src={heroBg} alt="background image" fill />
      </div>
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:h-full lg:w-[980px] lg:m-auto">
        <div className=" w-[100%]">
          <HeroLeft
            mainText={mainText}
            subText={subText}
            paragraph={paragraph}
            button={button}
          />
        </div>
        <div className=" w-[100%] flex justify-center">
          <HeroRight image={image} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
