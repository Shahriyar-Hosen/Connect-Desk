"use client";

import { LoginRegisterLeftSide, LoginRightSide } from "@Components/Auth";
import { ConnectDesk, MainContainer } from "@Components/Common";
import { AuthComponent } from "@Components/Shared";
import { loginLeftImg } from "@public/assets/images";

const login = () => {
  return (
    <MainContainer>
      <AuthComponent
        leftComponent={
          <LoginRegisterLeftSide
            title={
              <span>
                Welcome to <ConnectDesk text="xl" />
              </span>
            }
            image={loginLeftImg}
            paragraph="Let your Business Imagination Run Wild and Grow your Business Faster with ConnectDesk Software"
          />
        }
        rightComponent={<LoginRightSide />}
      />
    </MainContainer>
  );
};

export default login;
