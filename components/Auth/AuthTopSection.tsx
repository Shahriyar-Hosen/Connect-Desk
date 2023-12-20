"use client";

import { FC } from "react";

import { IAuthTopSection } from "@/Interface";
import { CommonText, Logo, ToggleButton } from "..";

export const AuthTopSection: FC<IAuthTopSection> = ({
  label,
  setUserType,
  userType,
  labelType = "title",
  otp,
}) => (
  <div className="flex flex-col justify-center items-center pt-5">
    <Logo lng="en" />

    <div className="my-2 md:my-3 text-center">
      {otp && (
        <p className="text-xs md:text-sm font-semibold mb-5">
          Please Enter the One-Time Password to verify your account
        </p>
      )}

      {labelType === "title" ? (
        <h3 className="text-neutral text-xs md:text-sm font-semibold">
          {label}
        </h3>
      ) : (
        <CommonText className="text-center">{label} </CommonText>
      )}
    </div>

    {setUserType && userType && (
      <ToggleButton setUserType={setUserType} userType={userType} />
    )}
  </div>
);
