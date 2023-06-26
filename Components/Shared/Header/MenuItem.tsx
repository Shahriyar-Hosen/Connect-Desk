"use client";

import Image from "next/image";
import Link from "next/link";

import { IMenuItem } from "@Interface";
import { downArrow } from "@public/assets/icon";
import { usePathname } from "next/navigation";

export const MenuItem = ({
  label,
  link,
  children,
  option,
  setOpen,
  handleDropdownHover,
  handleDropdownLeave,
  isMobile,
  open,
  router,
}: IMenuItem) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link);

  return (
    <div>
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
          className="lg:py-1 lg:px-2.5 xl:py-2 xl:px-4 flex gap-2"
        >
          {label} {option && <Image src={downArrow} alt={label} />}
        </Link>
        {children}
      </li>
      {(open === label || link === pathname) && (
        <div
          className={`w-full h-[2px] bg-primary transition-all duration-300 ${
            open === label || isActive ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: open === label || isActive ? "100%" : "0" }}
        ></div>
      )}
      {/* <div
        className={`${
          open === label || isActive
            ? "w-full transition duration-300 opacity-100"
            : "w-0 opacity-0"
        } h-[2px] bg-primary`}
      ></div> */}
    </div>
  );
};
