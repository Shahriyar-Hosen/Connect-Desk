"use client";

import { IHeroRight } from "@/Interface";
import Image from "next/image";
import { FC } from "react";

export const HeroRight: FC<IHeroRight> = ({ image, pos }) => (
  <Image
    src={image}
    alt=""
    className={`${
      pos
        ? "md:pb-[18%] lg:pb-[10%] mx-auto w-auto md:w-[50%] xl:w-auto"
        : "md:pb-[15%] lg:pb-[10%]"
    }`}
  />
);
