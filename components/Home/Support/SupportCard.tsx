"use client";

import { ICorporateSupport, IIntlTranslator } from "@/Interface";
import { CommonText } from "@/components";
import Image from "next/image";
import { FC } from "react";

export const SupportCard: FC<ICorporateSupport & IIntlTranslator> = ({
  img,
  title,
  t,
}) => (
  <div className="w-full max-w-[313px] rounded-md shadow-md flex justify-start items-center p-2.5 bg-white gap-2.5">
    <Image src={img} alt="24/7 Free Email Support" />
    <CommonText className="text-primary font-semibold max-w-[70%]" text="xl">
      {t(title)}
    </CommonText>
  </div>
);
