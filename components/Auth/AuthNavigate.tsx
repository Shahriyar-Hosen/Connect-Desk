"use client";

import Link from "next/link";
import { FC } from "react";

import { IAuthNavigate } from "@/Interface";
import { roundArrow } from "@/public/assets/icon";
import Image from "next/image";

export const AuthNavigate: FC<IAuthNavigate> = ({
  btnText = "Register Now",
  label = "Don't have an account?",
  link = "register",
  otp,
}) =>
  otp ? (
    <Link href="">
      <p className="text-center my-2 md:my-3 lg:my-3.5 text-base font-medium">
        Resent OTP Again
      </p>
    </Link>
  ) : (
    <>
      <p className="text-center my-2 md:my-3 lg:my-3.5 text-sm font-medium">
        {label}&nbsp;
        <Link className="text-primary" href={link}>
          {btnText}
        </Link>
      </p>

      <Link href="/" className="flex gap-3">
        <Image src={roundArrow} alt="" />
        <p className="cursor-pointer">Back to home</p>
      </Link>
    </>
  );
