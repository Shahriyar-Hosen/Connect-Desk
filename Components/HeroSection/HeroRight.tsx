"use client";

import Image from "next/image";
import { IHeroSection } from "@Interface/common/IHeroSection";

export const HeroRight = ({ image }: IHeroSection) => {
  return (
    <>
      <Image
        src={image || ""}
        alt=""
        className="w-[90%] md:w-[70%] lg:w-full "
      />
    </>
  );
};
