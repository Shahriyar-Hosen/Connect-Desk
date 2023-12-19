"use client";

import {
  AuthComponent,
  AuthLeftSide,
  ConnectDesk,
  MainContainer,
  RegisterRightSide,
} from "@/components";
import { loginLeftImg } from "@/public/assets/images";

const Register = () => (
  <MainContainer
    isRemoveMargin
    isRemovePadding
    fullScreen
    className="py-5 lg:py-0"
  >
    <AuthComponent
      leftComponent={
        <AuthLeftSide
          image={loginLeftImg}
          JSXTitle={
            <span>
              Welcome to <ConnectDesk lng="en" text="xl" />
            </span>
          }
          paragraph="You’ll get preloaded data or upload your own. Preconfigured processes, reports, and dashboards. Guided experiences for every steps."
          isSubTitle
          bottomBtn
        />
      }
      rightComponent={<RegisterRightSide />}
    />
  </MainContainer>
);

export default Register;
