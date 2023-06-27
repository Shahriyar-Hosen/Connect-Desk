"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

import { Button, InputField, Logo } from "@Components/Common";
import { IUserType } from "@Interface";
import { roundArrow } from "@public/assets/icon";
import { ToggleButton } from "../ToggleButton";

export const RegisterRightSide = () => {
  const [userType, setUserType] = useState<IUserType>("Business Login");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto lg:mx-8 lg:px-4 my-20">
      <div className="flex flex-col justify-center items-center">
        <Logo />
        <h3 className="my-4 text-neutral text-xl font-semibold">
          Register Your Business Area
        </h3>
        <ToggleButton setUserType={setUserType} userType={userType} />
      </div>
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
      <div className="flex my-3 gap-2 text-base font-medium">
        <p>But</p>
        <p>
          I agree with the <span className="text-error">Terms & Condition</span>
        </p>
      </div>
      <br />
      <Button variant="primary" width="full" size="lg">
        Register
      </Button>
      <div>
        <p className="text-center my-10 text-base font-medium">
          Already have an account?&nbsp;
          <Link className="text-primary" href="/login">
            Login
          </Link>
        </p>
      </div>
      <Link href="/" className="flex gap-3">
        <Image src={roundArrow} alt="" />
        <p className="cursor-pointer">Back to home</p>
      </Link>
    </div>
  );
};
