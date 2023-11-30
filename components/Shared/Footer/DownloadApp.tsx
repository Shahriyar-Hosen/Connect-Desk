"use client";

import { AppDownloadImg } from "@/components";
import { SocialMediaLinks } from ".";
import { FC } from "react";
import { IIntlComponentParams } from "@/Interface";

export const DownloadApp: FC<IIntlComponentParams> = ({ t }) => (
  <div className="mt-8 xl:mt-[60px] w-full lg:w-auto flex xl:block flex-col justify-center items-center">
    <h5 className="font-semibold text-xl mb-3">
      {t("footer.download.downloadApp")}
    </h5>
    <div className="mb-10">
      <AppDownloadImg />
    </div>

    <SocialMediaLinks t={t} />
  </div>
);
