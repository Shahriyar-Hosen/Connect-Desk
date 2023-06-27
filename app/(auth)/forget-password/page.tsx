"use client";

import {
  AuthComponent,
  ForgetPasswordRightSide,
  LoginRegisterLeftSide,
} from "@Components/Auth";
import { MainContainer } from "@Components/Common";
import { reset } from "@public/assets/images";

const ForgetPassword = () => {
  return (
    <MainContainer
      isRemoveMargin
      className="h-screen flex flex-col justify-center items-center"
    >
      <AuthComponent
        leftComponent={
          <LoginRegisterLeftSide
            title={<div className="mt-4 lg:mt-8">Reset Your Password</div>}
            image={reset}
          />
        }
        rightComponent={<ForgetPasswordRightSide />}
      />
    </MainContainer>
  );
};

export default ForgetPassword;
