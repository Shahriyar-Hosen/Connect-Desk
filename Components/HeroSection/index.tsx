"use client";

import { Container } from "@Components/Common";
import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";
import { heroBg } from "@public/assets/images";
import Image from "next/image";
import { IHeroSection } from "@Interface/common/IHeroSection";
const HeroSection = ({ image, mainText, subText, button }: IHeroSection) => {
  return (
    <div className={` relative h-screen `}>
      <div className="absolute inset-0 ">
        <Image src={heroBg} alt="background image" fill />
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center h-full lg:w-[70%] lg:m-auto">
        <div className="lg:w-[80%] w-[100%]">
          <HeroLeft mainText={mainText} subText={subText} button={button} />
        </div>
        <div className=" w-[100%] flex justify-center">
          <HeroRight />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
