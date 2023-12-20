"use client";

import { ChangeEvent, FC, useState } from "react";

import { IUserType } from "@/Interface";
import { InputField } from "@/components";
import { AuthMainRightSide } from "..";

export const LoginRightSide: FC = () => {
  const [userType, setUserType] = useState<IUserType>("Business Login");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };

  return (
    <AuthMainRightSide
      authTopLabel="Login Your Business Area"
      btnText="Login"
      maxWidth="max-w-[520px]"
      setUserType={setUserType}
      userType={userType}
      agreeSectionLabel1="Remember me"
      agreeSectionLabel2="Forget Password?"
      agreeSectionLabelLink2="/forget-password"
    >
      <div className="flex flex-col justify-center items-center">
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
    </AuthMainRightSide>
  );
};
