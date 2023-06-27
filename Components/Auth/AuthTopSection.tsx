"use client";

import { Logo } from "@Components/Common";
import { IToggleButton } from "@Interface";
import { ToggleButton } from "./ToggleButton";

export interface IAuthTopSection extends IToggleButton {
  label: string;
}

export const AuthTopSection = ({
  label,
  setUserType,
  userType,
}: IAuthTopSection) => (
  <div className="flex flex-col justify-center items-center">
    <Logo />

    <h3 className="my-[30px] text-neutral text-xl font-semibold">{label}</h3>

    <ToggleButton setUserType={setUserType} userType={userType} />
  </div>
);
