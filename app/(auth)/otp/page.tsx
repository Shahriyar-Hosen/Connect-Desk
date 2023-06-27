"use client";

import { AuthComponent, AuthLeftSide, OtpRightSide } from "@Components/Auth";
import { MainContainer } from "@Components/Common";
import { reset } from "@public/assets/images";

const Otp = () => {
  return (
    <MainContainer
      isRemoveMargin
      className="h-screen flex flex-col justify-center items-center"
    >
      <AuthComponent
        leftComponent={
          <AuthLeftSide
            title={<div className="mt-4 lg:mt-8">Reset Your Password</div>}
            image={reset}
          />
        }
        rightComponent={<OtpRightSide />}
      />
    </MainContainer>
  );
};

export default Otp;
