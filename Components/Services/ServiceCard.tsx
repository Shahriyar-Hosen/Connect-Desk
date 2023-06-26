"use client";

import Image from "next/image";
import Link from "next/link";

import { IService } from "@Interface";

export const ServiceCard = ({ des, img, title }: IService) => (
  <section className="w-full max-w-[453px] flex flex-col justify-center items-center mx-auto p-6 rounded-3xl bg-[#F9F9F9] gap-6">
    <Image src={img} alt="Service Card Images" />

    <p className="text-center font-semibold text-lg md:text-xl lg:text-2xl">
      {title}
    </p>

    <p className="text-center text-base md:text-lg lg:text-xl text-[#797979] mt-1.5">
      {des}
    </p>

    <Link
      href="#"
      className="text-primary text-base lg:text-lg font-bold underline"
    >
      Learn More
    </Link>
  </section>
);
