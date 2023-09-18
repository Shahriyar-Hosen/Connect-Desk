"use client";

import { IVideoTutorial } from "@/Interface";
import { FC } from "react";
import { Video } from "..";

export const VideoTutorialCard: FC<IVideoTutorial> = ({ title, videoUrl }) => (
  <div className="w-fit p-3 pt-2 sm:p-3.5 sm:pt-3.5 md:p-6 md:pt-5 boxShadow rounded-[10px]">
    <h4 className="text-xl md:text-2xl font-semibold text-center">{title}</h4>
    <Video size="md" className="mt-2 sm:mt-3 md:mt-5" url={videoUrl} />
  </div>
);
