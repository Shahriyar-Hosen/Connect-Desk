"use client";

import { CommonText, Logo } from "@Components/Common";
import { IAuthTopSection } from "@Interface";
import { ToggleButton } from "./ToggleButton";

export const AuthTopSection = ({
  label,
  setUserType,
  userType,
  labelType = "title",
  otp,
}: IAuthTopSection) => (
  <div className="flex flex-col justify-center items-center">
    <Logo />

    <div className="my-[25px] md:my-[30px] text-center">
      {otp && (
        <p className="text-base lg:text-xl font-semibold mb-5">
          Please Enter the One-Time Password to verify your account
        </p>
      )}

      {labelType === "title" ? (
        <h3 className="text-neutral text-base md:text-xl font-semibold">
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