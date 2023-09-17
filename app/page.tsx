"use client";

import Image from "next/image";

import { ConnectDesk } from "@/components";
import { fullLogo, logoSvg } from "@/public/assets";

const Home = () => (
  <div className="flex flex-col justify-center items-center mt-10">
    <Image src={fullLogo} alt="" />
    <p className="text-2xl font-extrabold mt-5 text-primary font-poppins mb-5">
      This is Testing Purpose deploy (poppins)
    </p>

    <Image src={logoSvg} alt="" />

    <p className="text-2xl font-extrabold mt-5 text-primary font-exo mb-5">
      This is Testing Purpose deploy (exo)
    </p>

    <ConnectDesk />
  </div>
);

export default Home;
