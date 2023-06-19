"use client";
import { navItems } from "@public/Data/common";
import Link from "next/link";

const MenuItems = () => {
  return (
    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal px-1 ">
        {navItems.map(({ label, link, option }, i) => (
          <li key={i} className="text-black">
            <Link href={link}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
