"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

import { Button, InputField } from "@Components/Common";
import { IUserType } from "@Interface";
import { rectangle } from "@public/assets/icon";
import { AuthNavigate, AuthTopSection } from "..";

export const LoginRightSide = () => {
  const [userType, setUserType] = useState<IUserType>("Business Login");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };

  return (
    <div className="w-full lg:mx-8 my-20">
      <AuthTopSection
        label="Login Your Business Area"
        setUserType={setUserType}
        userType={userType}
      />

      <div className="max-w-[520px] mx-auto">
        <div className="flex flex-col justify-center items-center gap-6">
          <InputField
            handleOnChange={handleOnChange}
            label="Email or Mobile No"
            placeholder="Enter your email or mobile number"
          />
          <InputField
            handleOnChange={handleOnChange}
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex justify-between items-center my-3 mt">
          <div className="flex justify-center items-center gap-2 text-base font-medium">
            <Image src={rectangle} alt="" />
            <p>Remember me</p>
          </div>
          <Link href="/forget-password" className="text-error cursor-pointer">
            Forget Password?
          </Link>
        </div>

        <br />

        <Button variant="primary" width="full" text="16" size="lg">
          Login
        </Button>

        <AuthNavigate />
      </div>
    </div>
  );
};
