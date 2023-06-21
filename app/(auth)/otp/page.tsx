"use client";

import { LoginRegisterLeftSide, OtpRightSide } from "@Components/Auth";
import { MainContainer } from "@Components/Common";
import { AuthComponent } from "@Components/Shared";
import { reset } from "@public/assets/images";

const otp = () => {
  return (
    <MainContainer>
      <AuthComponent
        leftComponent={
          <LoginRegisterLeftSide
            title={<div className="mt-4 lg:mt-8">Reset Your Password</div>}
            image={reset}
          />
        }
        rightComponent={<OtpRightSide />}
      />
    </MainContainer>
  );
};

export default otp;
