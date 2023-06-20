"use client";

import Image from "next/image";

import { CommonText } from "@Components/Common";
import { tick } from "@public/assets/icon";

export const FeaturesItem = ({ feature }: { feature: string }) => (
  <div className="flex justify-start items-start gap-2">
    <Image src={tick} className="mt-1" alt="package" />
    <CommonText text="sm">{feature}</CommonText>
  </div>
);
