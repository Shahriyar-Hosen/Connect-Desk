import { InputField } from "@Components/Common";
import { ChangeEvent } from "react";
import { AuthMainRightSide } from "../AuthMainRightSide";

export const ForgetPasswordRightSide = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };
  return (
    <AuthMainRightSide
      authTopLabel="Enter the email address or phone associated with your account and we’ll send your a verification code to reset your password."
      authTopLabelType="normal"
      btnText="Continue"
      maxWidth="max-w-[485px]"
    >
      <div className="mt-10">
        <InputField
          handleOnChange={handleOnChange}
          label="Email or Mobile No"
          placeholder="Enter your email or mobile number"
        />
      </div>
    </AuthMainRightSide>
  );
};
