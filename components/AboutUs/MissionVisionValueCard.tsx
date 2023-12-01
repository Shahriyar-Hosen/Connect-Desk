"use client";

import { IIntlTranslator, IMissionVisionValue } from "@/Interface";
import Image from "next/image";
import { FC } from "react";
import { CommonText, ComponentHeader } from "..";

export const MissionVisionValueCard: FC<
  IMissionVisionValue & IIntlTranslator
> = ({ des, img, title, id, t }) => (
  <div
    key={id}
    className={`flex flex-col-reverse ${
      id % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
    } justify-between items-center gap-5 mt-2.5`}
  >
    <div>
      <ComponentHeader
        title={t(title, { ns: "about-us" })}
        position="start"
        text="lg"
        about
      />
      <CommonText
        className="max-w-[432px] text-[#797979] text-start mt-7"
        text="xl"
      >
        {t(des, { ns: "about-us" })}
      </CommonText>
    </div>
    <Image
      src={img}
      className="w-[80%] md:w-[65%] lg:w-full max-w-[430px]"
      alt=""
    />
  </div>
);
