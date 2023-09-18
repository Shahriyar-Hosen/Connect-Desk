"use client";

import { IBackgroundImage } from "@/Interface";
import Image from "next/image";
import { FC } from "react";

export const BackgroundImage: FC<IBackgroundImage> = ({
  children,
  img,
  className,
  hidden,
}) => (
  <main className={`relative ${className}`}>
    <div
      className={`absolute w-full ${
        (hidden === "sm" && "md:inset-0") ||
        (hidden === "md" && "lg:inset-0") ||
        (hidden === "lg" && "xl:inset-0") ||
        (!hidden && "inset-0")
      }`}
    >
      <Image src={img} className="w-full" alt="background image" fill />
    </div>

    <section className="relative z-10">{children}</section>
  </main>
);
