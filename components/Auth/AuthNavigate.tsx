"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { IAuthNavigate } from "@/Interface";
import { roundArrow } from "@/public/assets/icon";

export const AuthNavigate: FC<IAuthNavigate> = ({
  btnText = "Register Now",
  label = "Don't have an account?",
  link = "register",
  otp,
}) => (
  <div>
    {otp ? (
      <Link href="">
        <p className="text-center my-10 text-base font-medium">
          Resent OTP Again
        </p>
      </Link>
    ) : (
      <>
        <p className="text-center my-5 md:my-7 lg:my-10 text-base font-medium">
          {label}&nbsp;
          <Link className="text-primary" href={`${link}`}>
            {btnText}
          </Link>
        </p>

        <Link href="/" className="flex gap-3">
          <Image src={roundArrow} alt="" />
          <p className="cursor-pointer">Back to home</p>
        </Link>
      </>
    )}
  </div>
);
