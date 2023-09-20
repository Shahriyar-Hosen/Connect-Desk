"use client";

import {
  AuthComponent,
  AuthLeftSide,
  ConfirmPasswordRightSide,
  MainContainer,
} from "@/components";
import { confirmPass } from "@/public/assets/images";

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
