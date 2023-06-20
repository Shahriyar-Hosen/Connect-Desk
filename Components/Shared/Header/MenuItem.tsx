"use client";

import Image from "next/image";
import Link from "next/link";

import { IMenuItem } from "@Interface";
import { downArrow } from "@public/assets/icon";

export const MenuItem = ({
  label,
  link,
  children,
  option,
  setOpen,
}: IMenuItem) => (
  <li className="text-black" onClick={() => setOpen(label)}>
    <Link href={link}>
      {label} {option && <Image src={downArrow} alt={label} />}
    </Link>

    {children}
  </li>
);
