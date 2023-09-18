"use client";

import { aboutTop1, aboutTop2 } from "@/public/assets/images";
import Image from "next/image";

export const WhoWeAreImg = () => (
  <div className="grid gap-2.5 grid-cols-3 max-w-6xl mx-auto my-8 md:my-[60px]">
    <Image src={aboutTop1} className="w-full col-span-2" alt="About Us" />
    <Image src={aboutTop2} className="w-full col-span-1" alt="About Us" />
  </div>
);
