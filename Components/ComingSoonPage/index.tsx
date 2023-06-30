"use client";

import { Logo } from "@Components/Common";
import Countdown from "@Components/Countdown";
import { roundArrow } from "@public/assets/icon";
import Image from "next/image";
import Link from "next/link";

const ComingSoonPage = () => {
  const targetDate = new Date("2023-09-01T00:00:00");
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-12">
        <Logo />
        <h1 className="text-[48px] font-semibold text-primary text-center">
          Coming Soon
        </h1>
        <Countdown targetDate={targetDate} />
        <Link href="/" className="flex gap-3">
          <Image src={roundArrow} alt="" />
          <p className="cursor-pointer">Back to home</p>
        </Link>
      </div>
    </main>
  );
};

export default ComingSoonPage;
