"use client";

import {
  AuthComponent,
  AuthLeftSide,
  ConnectDesk,
  LoginRightSide,
  MainContainer,
} from "@/components";
import { loginLeftImg } from "@/public/assets/images";

const Login = () => (
  <MainContainer
    isRemoveMargin
    isRemovePadding
    fullScreen
    className="py-5 lg:py-0"
  >
    <AuthComponent
      leftComponent={
        <AuthLeftSide
          JSXTitle={
            <span>
              Welcome to <ConnectDesk lng="en" text="xl" />
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

export default Login;
