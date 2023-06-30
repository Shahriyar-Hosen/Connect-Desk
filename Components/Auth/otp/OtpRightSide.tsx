import { CommonText, InputField } from "@Components/Common";
import { ChangeEvent } from "react";
import { AuthMainRightSide } from "../AuthMainRightSide";

export const OtpRightSide = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };

  return (
    <>
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

          <div className="flex justify-between gap-3">
            <InputField handleOnChange={handleOnChange} />
            <InputField handleOnChange={handleOnChange} />
            <InputField handleOnChange={handleOnChange} />
            <InputField handleOnChange={handleOnChange} />
            <InputField handleOnChange={handleOnChange} />
            <InputField handleOnChange={handleOnChange} />
          </div>
        </div>
      </AuthMainRightSide>

      {/* <div className="w-[90%] md:w-[80%] mx-auto lg:mx-8 lg:px-4 my-20">
        <div className="flex flex-col justify-center items-center">
          <Logo />
          <h3 className="my-4 text-neutral text-xl font-semibold">
            Please Enter the One-Time Password to verify your account
          </h3>
          <p className="my-4 text-neutral font-medium text-base">
            We have sent you One Time Password to your email
          </p>
          <p className="mt-6 text-neutral font-medium text-base">
            Please Enter OTP
          </p>
          <p className="mb-8 text-neutral font-medium text-base">1:52</p>
        </div>
        <div className="max-w-[428px] mx-auto">
          <div className="flex justify-between gap-3">
            <InputField handleOnChange={handleOnChange} />
            <InputField handleOnChange={handleOnChange} />
            <InputField handleOnChange={handleOnChange} />
            <InputField handleOnChange={handleOnChange} />
            <InputField handleOnChange={handleOnChange} />
            <InputField handleOnChange={handleOnChange} />
          </div>

          <br />
          <Button variant="primary" width="full" size="lg">
            Verify OTP
          </Button>
        </div>
        <div className="my-12 text-center">
          <Link className="text-center my-10 text-base font-medium" href="">
            Resent OTP Again
          </Link>
        </div>
      </div> */}
    </>
  );
};
