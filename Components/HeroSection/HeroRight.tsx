"use client";

import Image from "next/image";
import { heroLaptop } from "@public/assets/images";

export const HeroRight = () => {
  return (
    <>
      <Image
        src={heroLaptop}
        className="lg:w-[662px] lg:h-[420px]  w-[330px]"
        alt=""
      />
    </>
  );
};
