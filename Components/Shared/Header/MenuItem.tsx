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
  handleDropdownHover,
  handleDropdownLeave,
  isMobile,
}: IMenuItem) => (
  <li
    className={`text-black`}
    onClick={() => {
      if (isMobile) {
        setOpen(label);
      }
    }}
    onMouseEnter={() => handleDropdownHover(label)}
    onMouseLeave={handleDropdownLeave}
  >
    <Link
      href={`${!isMobile ? link : ""}`}
      className="lg:py-1 lg:px-2.5 xl:py-2 xl:px-4"
    >
      {label} {option && <Image src={downArrow} alt={label} />}
    </Link>
    {children}
  </li>
);
