"use client";

import Image from "next/image";

import { appStore, playStore } from "@public/assets/images";
import { SocialMediaLinks } from ".";

export const DownloadApp = () => (
  <div className="mt-8 xl:mt-[60px] w-full lg:w-auto flex xl:block flex-col justify-center items-center">
    <h5 className="font-semibold text-xl mb-3">Download App</h5>
    <div className="mb-10">
      <div className="flex justify-start items-center w-full">
        <Image className="w-[50%] h-auto" src={playStore} alt="" />
        <Image className="w-[50%] h-auto" src={appStore} alt="" />
      </div>
    </div>

    <SocialMediaLinks />
  </div>
);
