"use client";

import { takaLogo } from "@public/assets";
import Image from "next/image";

const Prices = ({ price }: { price: string }) => (
  <h6 className="font-semibold text-2xl sm:text-3xl md:text-4xl mt-2.5 flex justify-center items-center gap-1">
    <Image src={takaLogo} width={21} alt="business package" /> {price}
  </h6>
);

export default Prices;
