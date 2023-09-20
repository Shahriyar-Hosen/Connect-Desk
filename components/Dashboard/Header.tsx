"use client";

import { IHeader } from "@/Interface";
import Link from "next/link";
import { FC } from "react";
import { ImPlus } from "react-icons/im";

export const Header: FC<IHeader> = ({ title, link }) => (
  <header className="w-full shadow  rounded-md flex justify-between items-center p-2.5 py-2 mb-10">
    <h1 className="text-[22px] lg:text-[26px] font-medium pl-1.5">{title}</h1>
    <Link
      href={link}
      className="btn btn-info bg-opacity-70 hover:bg-opacity-100  transition-all delay-75 text-black hover:text-white"
    >
      <ImPlus /> Add New
    </Link>
  </header>
);
