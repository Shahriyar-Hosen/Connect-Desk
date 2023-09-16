"use client";

import { fullLogo, logoSvg } from "@/public/assets";
import Image from "next/image";

const Home = () => (
  <div className="flex flex-col justify-center items-center mt-10">
    <Image src={fullLogo} alt="" />
    <p className="text-2xl font-extrabold mt-5 text-primary font-poppins">
      This is Testing Purpose deploy (poppins)
    </p>
    <p className="text-2xl font-extrabold mt-5 text-primary font-exo mb-10">
      This is Testing Purpose deploy (exo)
    </p>

    <Image src={logoSvg} alt="" />
  </div>
);

export default Home;
