"use client";

import { IHardwareData, IIntlTranslator } from "@/Interface";
import Image from "next/image";
import { FC } from "react";
import { CommonText } from "..";

export const HardwareCard: FC<IHardwareData & IIntlTranslator> = ({
  category,
  details,
  image,
  name,
  t,
}) => (
  <div className="lg:flex gap-4 border-[6px] hover:border-[#C0C0C066]  rounded-md shadow-md  hover:bg-primary hover:text-white transition-all delay-100 cursor-pointer">
    <div className="w-full flex justify-center">
      <Image className="lg:w-full" src={image} alt={category} />
    </div>
    <div className="p-4">
      <h1 className="text-[14px] font-bold mb-4 text-center lg:text-left">
        {t(name, { ns: "hardware" })}
      </h1>

      {details.map((p, index) => (
        <ul key={index}>
          <li className="text-sm flex gap-2">
            {"\u2B24"}{" "}
            <CommonText text="lg">{t(p, { ns: "hardware" })}</CommonText>
          </li>
        </ul>
      ))}
    </div>
  </div>
);
