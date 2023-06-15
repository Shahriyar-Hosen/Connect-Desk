import { logo } from "@public/assets";
import Image from "next/image";
import Link from "next/link";
import { ConnectDesk } from "./ConnectDesk";

export const Logo = () => (
  <Link href="/" className="w-auto">
    <div className="sm:-mb-[9px] -mb-[9px] mr-[10%] flex justify-end items-end">
      <Image
        src={logo}
        className="w-[22px] h-[22px] sm:w-[30px] sm:h-[30px]"
        alt=""
      />
    </div>
    <ConnectDesk text="xl" font="Exo" />
    <p className="text-primary italic sm:text-[70%] text-[53%] font-sans tracking-widest sm:-mt-[5px] -mt-[5px] font-semibold">
      Business Management Software
    </p>
  </Link>
);
