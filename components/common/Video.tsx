"use client";

import { IVideo } from "@/Interface";
import { FC } from "react";

export const Video: FC<IVideo> = ({ url, className, size = "md" }) => (
  <div
    className={`w-fit h-auto mx-auto flex justify-center items-center border-[5px] rounded-lg border-white boxShadow ${className}`}
  >
    <iframe
      className={`${
        (size === "md" && "w-[85vw] md:w-[432px] md:h-[267px]") ||
        (size === "lg" && "w-[90vw] md:w-[700px] md:h-[380px]")
      } w-full h-auto  aspect-video rounded-lg`}
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);
