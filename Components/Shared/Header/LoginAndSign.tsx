"use client";
import { Button, LinkButton } from "@Components/Common";
import { downArrow, profile } from "@public/assets/icon";
import Image from "next/image";

const LoginAndSign = () => (
  <div className="navbar-end gap-2 hidden md:flex w-fit">
    <LinkButton link="/" variant="secondary" size="sm">
      <div className="flex gap-2">
        <Image src={profile} alt="" />
        <div className="h-[20px] w-[2px] bg-primary" />
        Login
      </div>
    </LinkButton>

    <LinkButton link="/" size="sm" variant="primary">
      Sign Up
    </LinkButton>

    <Button variant="secondary" size="sm">
      <div className="flex gap-1">
        EN
        <Image src={downArrow} alt="" />
      </div>
    </Button>
  </div>
);

export default LoginAndSign;
