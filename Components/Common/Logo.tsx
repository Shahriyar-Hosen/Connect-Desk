"use client";

import { logo } from "@public/assets";
import Image from "next/image";
import Link from "next/link";
import { ConnectDesk } from "./ConnectDesk";

export const Logo = () => (
  <div className="w-fit max-w-[168px]">
    <Link href="/">
      <div className="-mb-[12px] mr-[9%] flex justify-end items-end">
        <Image
          src={logo}
          className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
          alt=""
        />
      </div>

      <ConnectDesk text="lg" font="Exo" logo />

      {/* <p className="text-primary italic sm:text-[55%] text-[53%] font-sans tracking-widest sm:-mt-[5px] -mt-[5px] font-semibold cursor-pointer">
        Business Management Software
      </p> */}
      <p className="text-[8.5px] lg:text-[9.5px] text-primary italic font-sans tracking-widest sm:-mt-[5px] -mt-[5px] font-semibold cursor-pointer">
        Business Management Software
      </p>
    </Link>
  </div>
);
