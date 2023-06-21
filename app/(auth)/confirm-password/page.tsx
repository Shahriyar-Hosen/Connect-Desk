"use client";

import {
  ConfirmPasswordRightSide,
  LoginRegisterLeftSide,
} from "@Components/Auth";
import { MainContainer } from "@Components/Common";
import { AuthComponent } from "@Components/Shared";
import { confirmPass } from "@public/assets/images";

const confirmPassword = () => {
  return (
    <MainContainer>
      <AuthComponent
        leftComponent={
          <LoginRegisterLeftSide
            title={<div className="mt-4 lg:mt-8">Change Your Password</div>}
            image={confirmPass}
          />
        }
        rightComponent={<ConfirmPasswordRightSide />}
      />
    </MainContainer>
  );
};

export default confirmPassword;
