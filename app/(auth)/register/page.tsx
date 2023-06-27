"use client";

import {
  AuthComponent,
  LoginRegisterLeftSide,
  RegisterRightSide,
} from "@Components/Auth";
import { ConnectDesk, MainContainer } from "@Components/Common";
import { loginLeftImg } from "@public/assets/images";

const Register = () => (
  <MainContainer
    isRemoveMargin
    isRemovePadding
    className="h-screen w-full flex flex-col justify-center items-center"
  >
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

export default Register;
