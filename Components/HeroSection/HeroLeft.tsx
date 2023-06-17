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
    <div className="relative mx-[50px] lg:mx-0">
      <h1 className="text-[28px] lg:text-[32px] font-semibold">{mainText}</h1>
      <h1>{subText}</h1>
      <Image
        className="absolute lg:top-[110px] top-[140px] sm:top-[60px]"
        src={arrowHero}
        alt=""
      />

      <div className="max-w-[413px] mt-[36px] mb-[50px]">{paragraph}</div>
      <div className="flex gap-4">
        <Button variant="primary">Buy Now</Button>
        <Button variant="secondary">Watch Video</Button>
      </div>
    </div>
  );
};
