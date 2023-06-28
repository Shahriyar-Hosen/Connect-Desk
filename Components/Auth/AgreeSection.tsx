"use client";

import { CommonText } from "@Components/Common";
import { IAgreeSection } from "@Interface";
import { rectangle } from "@public/assets/icon";
import Image from "next/image";
import Link from "next/link";

export const AgreeSection = ({
  label1,
  label2,
  labelLink2 = "/",
}: IAgreeSection) => (
  <div className="flex justify-between items-center my-3 mt">
    <div className="flex justify-center items-center gap-2 text-base font-medium">
      <Image src={rectangle} alt="" />
      <CommonText>{label1}</CommonText>
    </div>

    {label2 ? (
      <Link href={labelLink2} className="text-error cursor-pointer">
        <CommonText> {label2}</CommonText>
      </Link>
    ) : null}
  </div>
);
