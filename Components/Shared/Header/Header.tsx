"use client";

import { Button, Logo } from "@Components/Common";
import { profile, downArrow } from "@public/assets/icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const menuItems = (
    <React.Fragment>
      <li className="text-black">
        <Link href="/about">Home</Link>
      </li>
      <li className="text-black">
        <Link href="/">Features</Link>
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
    </React.Fragment>
  );

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
    <div className=" bg-white">
      <div className="navbar lg:w-[90%] mx-auto">
        <div className="navbar-start relative ">
          {/* Mobile */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <button className="text-red-400">HB</button>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-md bg-white absolute z-[100] rounded-box w-52"
            >
              {menuItems}
              {mobileLoginAndSignUpButton}
            </ul>
          </div>
          <Logo />
        </div>
        {/* For desktop */}
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{menuItems}</ul>
        </div>
        {LoginAndSignUpButton}
      </div>
    </div>
  );
};
