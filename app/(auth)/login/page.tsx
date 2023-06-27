"use client";

import {
  AuthComponent,
  LoginRegisterLeftSide,
  LoginRightSide,
} from "@Components/Auth";
import { ConnectDesk, MainContainer } from "@Components/Common";
import { loginLeftImg } from "@public/assets/images";

const Login = () => {
  return (
    <MainContainer
      isRemoveMargin
      className="h-screen w-full flex flex-col justify-center items-center"
    >
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

export default Login;
