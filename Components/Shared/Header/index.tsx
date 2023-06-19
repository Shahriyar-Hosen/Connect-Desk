"use client";

import { Button, Container, Logo } from "@Components/Common";
import { navItems } from "@public/Data/common";
import { downArrow, profile } from "@public/assets/icon";
import Image from "next/image";
import Link from "next/link";
import LoginAndSign from "./LoginAndSign";

export const Header = () => {
  const menuItems = navItems.map(({ label, link, option }, i) => (
    <li key={i} className="text-black">
      <Link href={link}>{label}</Link>
    </li>
  ));

  const LoginAndSignUpButton = (
    <div className="navbar-end gap-2 d-none hidden md:flex">
      <Link href="/postcss.config.js">
        <Button variant="secondary" size="sm">
          <div className="flex gap-2">
            <Image src={profile} alt="" />
            <div className="h-[20px] w-[2px] bg-primary"></div>
            Login
          </div>
        </Button>
      </Link>
      <Link href="/postcss.config.js">
        <Button size="sm" variant="primary">
          Sign Up
        </Button>
      </Link>
      <Button variant="secondary" size="sm">
        <div className="flex gap-1">
          EN
          <Image src={downArrow} alt="" />
        </div>
      </Button>
    </div>
  );

  const mobileLoginAndSignUpButton = (
    <div className="flex gap-2 md:hidden">
      <Link href="/postcss.config.js">
        <Button variant="secondary" size="sm">
          <div className="flex gap-2">
            <Image src={profile} alt="" />
            <div className="h-[20px] w-[2px] bg-primary"></div>
            Login
          </div>
        </Button>
      </Link>
      <Link href="/postcss.config.js">
        <Button size="sm" variant="primary">
          <div className="flex px-3">
            <div>Sign up</div>
          </div>
        </Button>
      </Link>
    </div>
  );
  return (
    <Container>
      <nav className="flex justify-between items-center px-5 py-2.5">
        <Logo />

        <div>
          <div></div>
          <LoginAndSign />
        </div>
      </nav>
    </Container>
  );
};
