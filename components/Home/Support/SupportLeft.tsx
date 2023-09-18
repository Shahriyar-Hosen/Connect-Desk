"use client";

import { supportLeftImg } from "@/public/assets/images";
import Image from "next/image";
import { FC } from "react";

export const SupportLeft: FC = () => (
  <div className="w-full md:w-[50%] flex justify-center items-center">
    <Image
      src={supportLeftImg}
      className="w-[85%] sm:w-[60%] md:w-full"
      alt=""
    />
  </div>
);
