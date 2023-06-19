"use client";

import { Button } from "@Components/Common";
import { IHeroSection } from "@Interface/common/IHeroSection";
import { arrowHero } from "@public/assets/images";
import Image from "next/image";

export const HeroLeft = ({
  mainText,
  subText,
  paragraph,
  button,
}: IHeroSection) => (
  <div className="relative sm:w-[90%] md:w-[67%] lg:w-[70%] lg:ml-[60px]">
    <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold">
      {mainText}
    </h1>
    <h1>{subText}</h1>
    <Image
      className="absolute hidden lg:block top-[140px] lg:top-[110px]"
      src={arrowHero}
      alt=""
    />

    <div className="w-full md:max-w-[100%] lg:max-w-[413px] mt-[15px] mb-[25px] md:mt-[26px] md:mb-[40px]">
      {paragraph}
    </div>

    <div className="flex gap-4 justify-center items-center md:justify-start">
      <Button variant="primary">Buy Now</Button>
      <Button variant="secondary">Watch Video</Button>
    </div>
  </div>
);
