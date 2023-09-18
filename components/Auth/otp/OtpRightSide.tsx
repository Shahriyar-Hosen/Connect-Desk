import { CommonText, InputField } from "@/components";
import { ChangeEvent, FC } from "react";
import { AuthMainRightSide } from "..";

export const OtpRightSide: FC = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };

  return (
    <AuthMainRightSide
      otp
      authTopLabel="We have sent you One Time Password to your email"
      authTopLabelType="normal"
      maxWidth="max-w-[485px]"
      btnText="Verify OTP"
    >
      <div>
        <div className="flex flex-col justify-center items-center gap-2">
          <CommonText>Please Enter OTP</CommonText>
          <CommonText>1:52</CommonText>
        </div>

        <div className="flex justify-center gap-2.5 items-center">
          <InputField otp width="auto" handleOnChange={handleOnChange} />
          <InputField otp width="auto" handleOnChange={handleOnChange} />
          <InputField otp width="auto" handleOnChange={handleOnChange} />
          <InputField otp width="auto" handleOnChange={handleOnChange} />
          <InputField otp width="auto" handleOnChange={handleOnChange} />
          <InputField otp width="auto" handleOnChange={handleOnChange} />
        </div>
      </div>
    </AuthMainRightSide>
  );
};
