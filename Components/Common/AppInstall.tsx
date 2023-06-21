"use client";

import Image from "next/image";

import { IClassName } from "@Interface";
import { appStore, playStore } from "@public/assets/images";

export const AppDownloadImg = ({ className }: IClassName) => (
  <div className={`flex justify-start items-center w-full ${className}`}>
    <Image className="w-[50%] h-auto" src={playStore} alt="" />
    <Image className="w-[50%] h-auto" src={appStore} alt="" />
  </div>
);
