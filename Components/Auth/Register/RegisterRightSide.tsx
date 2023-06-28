"use client";

import { ChangeEvent, useState } from "react";

import { Button, InputField } from "@Components/Common";
import { IUserType } from "@Interface";
import { AgreeSection } from "../AgreeSection";
import { AuthNavigate } from "../AuthNavigate";
import { AuthTopSection } from "../AuthTopSection";

export const RegisterRightSide = () => {
  const [userType, setUserType] = useState<IUserType>("Business Login");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto lg:pr-5">
      <div className=" max-w-[602px] mx-auto">
        <AuthTopSection
          label="Register Your Business Area"
          setUserType={setUserType}
          userType={userType}
        />

        <div>
          <InputField
            handleOnChange={handleOnChange}
            label="Business Name"
            placeholder="Enter your business name"
          />

          <div className="md:flex gap-5">
            <InputField
              handleOnChange={handleOnChange}
              label="Mobile Number"
              placeholder="Enter your number"
            />
            <InputField
              handleOnChange={handleOnChange}
              label="Email"
              placeholder="Enter your email"
            />
          </div>
          <div className="md:flex gap-5">
            <InputField
              handleOnChange={handleOnChange}
              type="password"
              label="Password"
              placeholder="Password (Min. 6 digit)"
            />
            <InputField
              handleOnChange={handleOnChange}
              label="Retype Password"
              type="password"
              placeholder="Retype Password"
            />
          </div>
        </div>

        <AgreeSection
          label1={
            <>
              I agree with the&nbsp;
              <span className="text-warning">Terms & Condition</span>
            </>
          }
        />

        <br />

        <Button variant="primary" width="full" size="lg">
          Register
        </Button>

        <AuthNavigate
          label="Already have an account?"
          btnText="Login"
          link="login"
        />
      </div>
    </div>
  );
};
