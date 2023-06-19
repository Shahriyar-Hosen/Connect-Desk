"use client";
import { CommonText } from "@Components/Common";
import { tick } from "@public/assets/icon";
import Image from "next/image";

const FeaturesItem = ({ feature }: { feature: string }) => {
  return (
    <div className="flex justify-start items-start gap-2">
      <Image src={tick} className="mt-1" alt="package" />
      <CommonText text="sm">{feature}</CommonText>
    </div>
  );
};

export default FeaturesItem;
