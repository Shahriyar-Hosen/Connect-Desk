"use client";

import { AppDownloadImg } from "@Components/Common";
import { SocialMediaLinks } from ".";

export const DownloadApp = () => (
  <div className="mt-8 xl:mt-[60px] w-full lg:w-auto flex xl:block flex-col justify-center items-center">
    <h5 className="font-semibold text-xl mb-3">Download App</h5>
    <div className="mb-10">
      <AppDownloadImg />
    </div>

    <SocialMediaLinks />
  </div>
);
