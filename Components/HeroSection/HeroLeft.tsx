"use client";
import { Button, CommonText } from "@Components/Common";
import { IHeroSection } from "@Interface/common/IHeroSection";
import Image from "next/image";
import { arrowHero } from "@public/assets/images";

export const HeroLeft = ({
  mainText,
  subText,
  paragraph,
  button,
}: IHeroSection) => {
  return (
    <div className="relative lg:w-[70%] lg:ml-[60px]">
      <h1 className="text-[24px] lg:text-[32px] font-semibold">{mainText}</h1>
      <h1>{subText}</h1>
      <Image
        className="absolute hidden md:block lg:top-[110px] top-[140px] sm:top-[60px]"
        src={arrowHero}
        alt=""
      />

      <div className="max-w-[413px] mt-[36px] mb-[50px]">{paragraph}</div>
      <div className="flex gap-4 justify-center items-center md:justify-start">
        <Button variant="primary">Buy Now</Button>
        <Button variant="secondary">Watch Video</Button>
      </div>
    </div>
  );
};
