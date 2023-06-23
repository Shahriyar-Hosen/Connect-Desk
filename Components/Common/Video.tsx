"use client";

import { IVideo } from "@Interface";

export const Video = ({ url, className, size = "md" }: IVideo) => (
  <div
    className={`w-fit h-auto mx-auto flex justify-center items-center border-[5px] rounded-lg border-white boxShadow ${className}`}
  >
    <iframe
      className={`${
        (size === "md" && "w-[80vw] max-w-[432px] max-h-[267px]") ||
        (size === "lg" && "w-[80vw] max-w-[700px] max-h-[380px]")
      } w-full h-auto  aspect-video rounded-lg`}
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);
