"use client";

import { Container, Logo } from "@Components/Common";
import { navItems } from "@public/Data/common";
import Link from "next/link";

export const Header = () => {
  const menuItems = navItems.map(({ label, link, option }, i) => (
    <li key={i} className="text-black">
      <Link href={link}>{label}</Link>
    </li>
  ));

  return (
    <>
      <Container>
        <nav className="flex justify-between items-center">
          <div className="w-[168px]">
            <Logo />
          </div>
        </nav>
      </Container>
    </>
  );
};
