"use client";

import {
  AuthComponent,
  AuthLeftSide,
  RegisterRightSide,
} from "@Components/Auth";
import { ConnectDesk, MainContainer } from "@Components/Common";
import { loginLeftImg } from "@public/assets/images";

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
          title={
            <span>
              Welcome to <ConnectDesk text="xl" />
            </span>
          }
          titleType="JSX"
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
