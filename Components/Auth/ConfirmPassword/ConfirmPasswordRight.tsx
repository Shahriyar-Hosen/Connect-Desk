import { Button, InputField, Logo } from "@Components/Common";
import { ChangeEvent } from "react";

export const ConfirmPasswordRightSide = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };
  return (
    <div className="w-[90%] md:w-[80%] mx-auto lg:mx-12 my-20">
      <div className="flex flex-col justify-center items-center">
        <Logo />
        <h3 className="my-4 text-neutral text-xl font-semibold text-center">
          Change Your Password
        </h3>
      </div>
      <div className="max-w-[528px] mx-auto">
        <div>
          <InputField
            handleOnChange={handleOnChange}
            label="New Password"
            type="password"
            placeholder="Enter your password"
          />
          <InputField
            handleOnChange={handleOnChange}
            label="Confirm New Password"
            placeholder="Enter your password"
          />
        </div>
        <br />
        <Button variant="primary" width="full" size="lg">
          submit
        </Button>
      </div>
    </div>
  );
};
