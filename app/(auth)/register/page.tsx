"use client";

import { LoginRegisterLeftSide, RegisterRightSide } from "@Components/Auth";
import { ConnectDesk, MainContainer } from "@Components/Common";
import { AuthComponent } from "@Components/Shared";
import { loginLeftImg } from "@public/assets/images";

const Register = () => {
  return (
    <MainContainer isRemoveMargin>
      <AuthComponent
        leftComponent={
          <LoginRegisterLeftSide
            image={loginLeftImg}
            title={
              <span>
                Welcome to <ConnectDesk text="xl" />
              </span>
            }
            paragraph="You’ll get preloaded data or upload your own. Preconfigured
          processes, reports, and dashboards. Guided experiences for every
          steps."
            isSubTitle
          />
        }
        rightComponent={<RegisterRightSide />}
      />
    </MainContainer>
  );
};

export default Register;
