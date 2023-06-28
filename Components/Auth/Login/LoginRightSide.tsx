"use client";

import { ChangeEvent, useState } from "react";

import { Button, InputField } from "@Components/Common";
import { IUserType } from "@Interface";
import { AgreeSection, AuthNavigate, AuthTopSection } from "..";

export const LoginRightSide = () => {
  const [userType, setUserType] = useState<IUserType>("Business Login");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };

  return (
    <div className="w-[90%] mx-auto md:w-full lg:pr-5">
      <AuthTopSection
        label="Login Your Business Area"
        setUserType={setUserType}
        userType={userType}
      />

      <div className="w-full max-w-[520px] mx-auto">
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

        <AgreeSection
          label1="Remember me"
          label2="Forget Password?"
          labelLink2="/forget-password"
        />

        <br />

        <Button variant="primary" width="full" text="16" size="lg">
          Login
        </Button>

        <AuthNavigate />
      </div>
    </div>
  );
};
