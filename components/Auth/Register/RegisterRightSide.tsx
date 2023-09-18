"use client";

import { ChangeEvent, FC, useState } from "react";

import { IUserType } from "@/Interface";
import { InputField } from "@/components";
import { AuthMainRightSide } from "../AuthMainRightSide";

export const RegisterRightSide: FC = () => {
  const [userType, setUserType] = useState<IUserType>("Business Login");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };

  return (
    <AuthMainRightSide
      maxWidth="max-w-[602px]"
      authTopLabel="Register Your Business Area"
      setUserType={setUserType}
      userType={userType}
      agreeSectionLabel1={
        <>
          I agree with the&nbsp;
          <span className="text-warning">Terms & Condition</span>
        </>
      }
      btnText="Register"
      authNavigateLabel="Already have an account?"
      authNavigateBtnText="Login"
      authNavigateLink="/login"
    >
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
    </AuthMainRightSide>
  );
};
