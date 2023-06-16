"use client";

import { CommonText } from "@Components/Common";
import { checkPrimary } from "@public/assets/icon";
import Image from "next/image";

const Solution = ({ title }: { title: string }) => {
  return (
    <div className="w-[136px] flex flex-col justify-center items-center text-center">
      <Image src={checkPrimary} alt="" />
      <CommonText>{title}</CommonText>
    </div>
  );
};

export default Solution;
