"use client";

import { Logo } from "@/Components/common";
import { fullLogo } from "@/public/assets";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Image src={fullLogo} alt="" />
      <p className="text-2xl font-extrabold mt-5 text-primary">
        This is Testing Purpose deploy
      </p>
      <Logo />
    </div>
  );
};

export default Home;
