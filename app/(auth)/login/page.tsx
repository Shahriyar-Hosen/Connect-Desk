"use client";

import { AuthComponent, AuthLeftSide, LoginRightSide } from "@Components/Auth";
import { ConnectDesk, MainContainer } from "@Components/Common";
import { loginLeftImg } from "@public/assets/images";

const Login = () => {
  return (
    <MainContainer isRemoveMargin isRemovePadding fullScreen>
      <AuthComponent
        leftComponent={
          <AuthLeftSide
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

export default Login;
