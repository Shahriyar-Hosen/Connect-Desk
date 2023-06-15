import { logo } from "@public/assets";
import Image from "next/image";
import { ConnectDesk } from "./ConnectDesk";

export const Logo = () => (
  <div>
    <div className="-mb-[16px] mr-5 flex justify-end items-end">
      <Image src={logo} width={30} height={30} alt="" />
    </div>
    <ConnectDesk text="xl" font="Exo" />
    <p className="text-primary italic text-[11.3px] font-sans tracking-widest -mt-[9px] font-semibold">
      Business Management Software
    </p>
  </div>
);
