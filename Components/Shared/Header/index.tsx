"use client";

import { navItems } from "@public/Data/common";
import Link from "next/link";

export const Header = () => {
  const menuItems = (
    <>
      {navItems.map(({ label, link, option }, i) => (
        <li key={i} className="text-black">
          <Link href={link}>{label}</Link>
        </li>
      ))}
      <li className="text-black">
        <Link href="/appointment">Features</Link>
      </li>
      <li className="text-black">
        <Link href="/">Package</Link>
      </li>
      <li className="text-black">
        <Link href="/">Service</Link>
      </li>
      <li className="text-black">
        <Link href="/">Blog</Link>
      </li>
      <li className="text-black">
        <Link href="/">Support</Link>
      </li>
      <li className="text-black">
        <Link href="/">More</Link>
      </li>
    </>
  );
  return <div></div>;
};
