"use client";

import { IHardwareData } from "@/Interface";
import Image from "next/image";
import { FC } from "react";
import { CommonText } from "..";

export const HardwareCard: FC<IHardwareData> = ({
  category,
  details,
  image,
  name,
}) => (
  <div className="lg:flex gap-4 border rounded-md shadow-md">
    <div className="w-full flex justify-center ">
      <Image className="lg:w-full" src={image} alt={category} />
    </div>
    <div className="p-4">
      <h1 className="text-[14px] font-bold mb-4 text-center lg:text-left">
        {name}
      </h1>

      {details.map((p, index) => (
        <ul key={index}>
          <li className="text-sm flex gap-2">
            {"\u2B24"} <CommonText text="lg">{p}</CommonText>
          </li>
        </ul>
      ))}
    </div>
  </div>
);
