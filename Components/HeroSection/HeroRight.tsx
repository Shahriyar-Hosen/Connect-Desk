"use client";

import Image from "next/image";
import { heroLaptop } from "@public/assets/images";

export const HeroRight = () => {
  return (
    <>
      <Image src={heroLaptop} className="w-[662px]  sm:w-[330px]" alt="" />
    </>
  );
};
