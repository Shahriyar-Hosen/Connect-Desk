"use client";

import { Logo } from "@Components/Common";
import { IAuthTopSection } from "@Interface";
import { ToggleButton } from "./ToggleButton";

export const AuthTopSection = ({
  label,
  setUserType,
  userType,
}: IAuthTopSection) => (
  <div className="flex flex-col justify-center items-center">
    <Logo />

    <h3 className="my-[25px] md:my-[30px] text-neutral text-base md:text-xl font-semibold text-center">
      {label}
    </h3>

    <ToggleButton setUserType={setUserType} userType={userType} />
  </div>
);
