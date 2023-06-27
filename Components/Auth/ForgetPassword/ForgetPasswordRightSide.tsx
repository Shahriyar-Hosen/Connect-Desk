import { Button, CommonText, InputField, Logo } from "@Components/Common";
import { roundArrow } from "@public/assets/icon";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent } from "react";

export const ForgetPasswordRightSide = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };
  return (
    <div className="w-[90%] md:w-[80%] mx-auto lg:mx-12 my-20">
      <div className="max-w-[485px] mx-auto my-auto">
        <div className="flex flex-col justify-center items-center">
          <Logo />
          <CommonText className="my-4 text-center">
            Enter the email address or phone associated with your account and
            we’ll send your a verification code to reset your password.
          </CommonText>
        </div>
        <div>
          <InputField
            handleOnChange={handleOnChange}
            label="Email or Mobile No"
            placeholder="Enter your email or mobile number"
          />
        </div>
        <br />
        <Button variant="primary" width="full" size="lg">
          Continue
        </Button>
        <div>
          <p className="text-center my-10 text-base font-medium">
            Don’t have an account?
            <Link className="text-primary" href="">
              Register Now
            </Link>
          </p>
        </div>
        <div className="flex gap-3">
          <Image src={roundArrow} alt="" />
          <p>Back to home</p>
        </div>
      </div>
    </div>
  );
};
