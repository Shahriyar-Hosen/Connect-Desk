"use client";

import { AuthLeftSide, ConfirmPasswordRightSide } from "@Components/Auth";
import { MainContainer } from "@Components/Common";
import { AuthComponent } from "@Components/Shared";
import { confirmPass } from "@public/assets/images";

const ConfirmPassword = () => (
  <MainContainer
    isRemoveMargin
    isRemovePadding
    fullScreen
    className="py-5 lg:py-0"
  >
    <AuthComponent
      leftComponent={
        <AuthLeftSide title="Change Your Password" image={confirmPass} />
      }
      rightComponent={<ConfirmPasswordRightSide />}
    />
  </MainContainer>
);

export default ConfirmPassword;
