"use client";

import Image from "next/image";
import { IHeroSection } from "@Interface/common/IHeroSection";

export const HeroRight = ({ image }: IHeroSection) => {
  return (
    <>
      <Image src={image || ""} className="lg:w-[862px] lg:h-[620px]" alt="" />
    </>
  );
};
