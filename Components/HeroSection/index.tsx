"use client";

import { Container } from "@Components/Common";
import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";
import { heroBg } from "@public/assets/images";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className={` relative h-screen `}>
      <div className="absolute inset-0 ">
        <Image src={heroBg} alt="background image" fill />
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full lg:w-[80%] lg:m-auto">
        <div className="lg:w-[80%] w-[100%]">
          <HeroLeft />
        </div>
        <div className=" w-full flex justify-center">
          <HeroRight />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;