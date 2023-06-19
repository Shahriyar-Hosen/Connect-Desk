"use client";

import { IBackgroundImage } from "@Interface";
import Image from "next/image";

export const BackgroundImage = ({
  children,
  img,
  className,
  hidden,
}: IBackgroundImage) => (
  <main className={`relative min-h-[500px] w-full ${className}`}>
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
