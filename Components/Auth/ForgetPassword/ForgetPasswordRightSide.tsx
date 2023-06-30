import { InputField } from "@Components/Common";
import { ChangeEvent } from "react";
import { AuthMainRightSide } from "../AuthMainRightSide";

export const ForgetPasswordRightSide = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };
  return (
    <>
      <AuthMainRightSide
        authTopLabel="Enter the email address or phone associated with your account and we’ll send your a verification code to reset your password."
        authTopLabelType="normal"
        btnText="Continue"
        maxWidth="max-w-[485px]"
        agreeSectionLabel1="Remember me"
        agreeSectionLabel2="Forget Password?"
        agreeSectionLabelLink2="/forget-password"
      >
        <InputField
          handleOnChange={handleOnChange}
          label="Email or Mobile No"
          placeholder="Enter your email or mobile number"
        />
      </AuthMainRightSide>

      {/* <div className="w-[90%] md:w-[80%] mx-auto lg:mx-12 my-20">
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
      </div> */}
    </>
  );
};
