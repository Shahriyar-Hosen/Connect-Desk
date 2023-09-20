"use client";

import {
  AuthComponent,
  AuthLeftSide,
  MainContainer,
  OtpRightSide,
} from "@/components";
import { reset } from "@/public/assets/images";

const Otp = () => (
  <MainContainer
    isRemoveMargin
    className="h-screen flex flex-col justify-center items-center"
  >
    <AuthComponent
      leftComponent={<AuthLeftSide title="Reset Your Password" image={reset} />}
      rightComponent={<OtpRightSide />}
    />
  </MainContainer>
);

export default Otp;
