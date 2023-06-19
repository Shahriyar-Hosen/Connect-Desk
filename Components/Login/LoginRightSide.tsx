import { Button, InputField, Logo } from "@Components/Common";
import { ChangeEvent } from "react";

export const LoginRightSide = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };
  return (
    <div className="w-full mx-8">
      <div className="flex flex-col justify-center items-center">
        <Logo />
        <h3 className="my-4 text-neutral text-xl font-semibold">
          Register Your Business Area
        </h3>
        <div className="flex">
          <Button variant="primary" size="lg">
            Business
          </Button>
          <Button variant="secondary" size="lg">
            Client Login
          </Button>
        </div>
      </div>
      <div>
        <InputField
          handleOnChange={handleOnChange}
          label="Business Name"
          placeholder="Enter your business name"
        />
        <div className="flex gap-5">
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
        <div className="flex gap-5">
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
      <br />
      <Button variant="primary" width="full" size="lg">
        Register
      </Button>
    </div>
  );
};
