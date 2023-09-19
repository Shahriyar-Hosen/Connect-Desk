"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { roundArrow } from "@/public/assets/icon";
import { Countdown, Logo } from "..";

export const ComingSoon: FC = () => (
  <main className="h-screen w-full flex justify-center items-center">
    <div className=" flex flex-col justify-center items-center gap-10 lg:gap-12">
      <Logo />

      <h1 className="text-3xl lg:text-[48px] font-semibold text-primary text-center">
        Coming Soon
      </h1>

      <Countdown day="01" month="12" year="2024" />

      <Link href="/" className="flex gap-3">
        <Image src={roundArrow} alt="" />
        <p className="cursor-pointer">Back to home</p>
      </Link>
    </div>
  </main>
);
