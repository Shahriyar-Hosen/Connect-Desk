import { Button, InputField, Logo } from "@Components/Common";
import { rectangle, roundArrow } from "@public/assets/icon";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent } from "react";
import { ToggleButton } from "./ToggleButton";

export const LoginRightSide = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };
  return (
    <div className="w-full lg:mx-8 my-20">
      <div className="flex flex-col justify-center items-center">
        <Logo />
        <h3 className="my-4 text-neutral text-xl font-semibold">
          Login Your Business Area
        </h3>
        <ToggleButton />
      </div>
      <div>
        <InputField
          handleOnChange={handleOnChange}
          label="Email or Mobile No"
          placeholder="Enter your email or mobile number"
        />
        <div className="md:flex gap-5">
          <InputField
            handleOnChange={handleOnChange}
            label="Email"
            placeholder="Enter your email"
          />
          <InputField
            handleOnChange={handleOnChange}
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex my-3 gap-2 text-base font-medium">
          <Image src={rectangle} alt="" />
          <p>Remember me</p>
        </div>
        <p className="text-error">Forget Password?</p>
      </div>
      <br />
      <Button variant="primary" width="full" size="lg">
        Login
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
  );
};
