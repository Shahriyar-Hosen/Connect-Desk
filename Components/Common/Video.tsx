"use client";

import { IVideo } from "@Interface";

export const Video = ({ height, url, weight, className }: IVideo) => (
  <div
    className={`w-fit h-auto mx-auto flex justify-center items-center border-[5px] rounded-lg border-white boxShadow ${className}`}
  >
    <iframe
      className={`w-full md:w-[${weight}px] h-auto md:h-[${height}px] aspect-video rounded-lg`}
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);
