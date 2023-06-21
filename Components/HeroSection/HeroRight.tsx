"use client";

import Image from "next/image";

import { IHeroSection } from "@Interface/common/IHeroSection";

export const HeroRight = ({ image }: IHeroSection) => (
  <Image
    src={image || ""}
    alt=""
    className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] xl:w-full"
  />
);
