"use client";

import { IIntlTranslator, ILabelAndIcon } from "@/Interface";
import Image from "next/image";
import { FC } from "react";
import { CommonText } from "..";

export const FeatureCard: FC<ILabelAndIcon & IIntlTranslator> = ({
  icon,
  label,
  t,
}) => (
  <div className="sm:w-full max-w-[190px] md:w-[190px] p-6 flex flex-col justify-center items-center gap-[30px] border border-base-100 rounded-xl shadow-md">
    <Image src={icon} alt="" />
    <CommonText className="font-semibold text-center">
      {t(label, { ns: "services" })}
    </CommonText>
  </div>
);
