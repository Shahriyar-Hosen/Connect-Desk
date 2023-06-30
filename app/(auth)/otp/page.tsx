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
          <AuthLeftSide title="Reset Your Password" image={reset} />
        }
        rightComponent={<OtpRightSide />}
      />
    </MainContainer>
  );
};

export default Otp;
