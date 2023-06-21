"use client";

import { IHeroRight } from "@Interface";
import Image from "next/image";

export const HeroRight = ({ image, pos }: IHeroRight) => (
  <Image
    src={image}
    alt=""
    className={`${
      pos ? "md:pb-[18%] lg:pb-[10%] mx-auto" : "md:pb-[15%] lg:pb-[10%]"
    }`}
  />
);
