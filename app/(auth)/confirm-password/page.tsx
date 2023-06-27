"use client";

import { AuthLeftSide, ConfirmPasswordRightSide } from "@Components/Auth";
import { MainContainer } from "@Components/Common";
import { AuthComponent } from "@Components/Shared";
import { confirmPass } from "@public/assets/images";

const ConfirmPassword = () => {
  return (
    <MainContainer isRemoveMargin>
      <AuthComponent
        leftComponent={
          <AuthLeftSide
            title={<div className="mt-4 lg:mt-8">Change Your Password</div>}
            image={confirmPass}
          />
        }
        rightComponent={<ConfirmPasswordRightSide />}
      />
    </MainContainer>
  );
};

export default ConfirmPassword;
