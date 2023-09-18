"use client";

import { Button, LinkButton } from "@/components";
import { downArrow, profile } from "@/public/assets/icon";
import Image from "next/image";
import { FC } from "react";

export const LoginAndSign: FC = () => (
  <div className="hidden md:flex w-fit gap-2">
    <LinkButton link="/login" variant="secondary" size="sm">
      <div className="flex gap-2">
        <Image src={profile} alt="" />
        <div className="h-[20px] w-[2px] bg-primary" />
        Login
      </div>
    </LinkButton>

    <LinkButton link="/register" size="sm" variant="primary">
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

export const MobileLoginAndSignUpButton = () => (
  <div className="flex gap-2 md:hidden">
    <LinkButton link="/" variant="secondary" size="sm">
      <div className="flex gap-2">
        <Image src={profile} alt="" />
        <div className="h-[20px] w-[2px] bg-primary"></div>
        Login
      </div>
    </LinkButton>

    <LinkButton link="/" size="sm" variant="primary">
      <div className="flex px-3">
        <div>Sign up</div>
      </div>
    </LinkButton>
  </div>
);
