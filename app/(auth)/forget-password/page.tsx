"use client";

import {
  ForgetPasswordRightSide,
  LoginRegisterLeftSide,
} from "@Components/Auth";
import { MainContainer } from "@Components/Common";
import { AuthComponent } from "@Components/Shared";
import { reset } from "@public/assets/images";

const ForgetPassword = () => {
  return (
    <MainContainer isRemoveMargin>
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
