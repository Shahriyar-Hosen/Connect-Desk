import { InputField } from "@/components";
import { ChangeEvent, FC } from "react";
import { AuthMainRightSide } from "..";

export const ForgetPasswordRightSide: FC = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };

  return (
    <AuthMainRightSide
      authTopLabel="Enter the email address or phone associated with your account and we’ll send your a verification code to reset your password."
      authTopLabelType="normal"
      maxWidth="max-w-[485px]"
      btnText="Continue"
      btnLink="/confirm-password"
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
