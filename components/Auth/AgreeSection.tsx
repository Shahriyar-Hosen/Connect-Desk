"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { IAgreeSection } from "@/Interface";
import { rectangle } from "@/public/assets/icon";
import { CommonText } from "..";

export const AgreeSection: FC<IAgreeSection> = ({
  label1,
  label2,
  labelLink2 = "/",
}) => (
  <div className="flex justify-between items-center my-0.5">
    <div className="flex justify-center items-center gap-2 text-base font-medium">
      <Image src={rectangle} alt="" />
      <CommonText>{label1}</CommonText>
    </div>

    {label2 ? (
      <Link href={labelLink2} className="text-error">
        <CommonText className="cursor-pointer"> {label2}</CommonText>
      </Link>
    ) : null}
  </div>
);
