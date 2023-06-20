"use client";

import { LoginRegisterLeftSide, RegisterRightSide } from "@Components/Auth";
import { MainContainer } from "@Components/Common";

const login = () => (
  <MainContainer>
    <div className="flex flex-col lg:flex-row px-4 md:px-20 gap-10">
      <LoginRegisterLeftSide
        paragraph="You’ll get preloaded data or upload your own. Preconfigured
      processes, reports, and dashboards. Guided experiences for every
      steps."
      />
      <RegisterRightSide />
    </div>
  </MainContainer>
);

export default login;
