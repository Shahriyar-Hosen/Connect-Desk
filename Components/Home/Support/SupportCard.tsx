"use client";
import { CommonText } from "@Components/Common";
import { ICorporateSupport } from "@Interface";
import Image from "next/image";
import React from "react";

const SupportCard = ({ img, title }: ICorporateSupport) => (
  <div className="w-full max-w-[313px] rounded-md shadow-md flex justify-start items-center p-2.5 bg-white gap-2.5">
    <Image src={img} alt="24/7 Free Email Support" />
    <CommonText className="text-primary font-semibold max-w-[70%]" text="xl">
      {title}
    </CommonText>
  </div>
);

export default SupportCard;
