"use client";

import { IMissionVisionValue } from "@/Interface";
import Image from "next/image";
import { FC } from "react";
import { CommonText, ComponentHeader } from "..";

export const MissionVisionValueCard: FC<IMissionVisionValue> = ({
  des,
  img,
  title,
  id,
}) => (
  <div
    key={id}
    className={`flex flex-col-reverse ${
      id % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
    } justify-between items-center gap-5 mt-2.5`}
  >
    <div>
      <ComponentHeader title={title} position="start" text="lg" about />
      <CommonText
        className="max-w-[432px] text-[#797979] text-start mt-7"
        text="xl"
      >
        {des}
      </CommonText>
    </div>
    <Image
      src={img}
      className="w-[80%] md:w-[65%] lg:w-full max-w-[430px]"
      alt=""
    />
  </div>
);