"use client";

import Image from "next/image";

import { logoSvg } from "@/public/assets";
import Link from "next/link";
import { FC } from "react";

export const Logo: FC = () => (
  <Link href="/">
    <Image src={logoSvg} alt="" />
  </Link>
);
