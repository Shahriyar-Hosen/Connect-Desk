"use client";

import {
  AuthComponent,
  AuthLeftSide,
  ForgetPasswordRightSide,
} from "@Components/Auth";
import { MainContainer } from "@Components/Common";
import { reset } from "@public/assets/images";

const ForgetPassword = () => (
  <MainContainer
    isRemoveMargin
    isRemovePadding
    fullScreen
    className="py-5 lg:py-0"
  >
    <AuthComponent
      leftComponent={<AuthLeftSide title="Reset Your Password" image={reset} />}
      rightComponent={<ForgetPasswordRightSide />}
    />
  </MainContainer>
);

export default ForgetPassword;
