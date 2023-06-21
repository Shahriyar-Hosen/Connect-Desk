"use client";

import { LoginRegisterLeftSide, LoginRightSide } from "@Components/Auth";
import { MainContainer } from "@Components/Common";

const login = () => (
  <MainContainer>
    <div className="w-[100%] lg:w-[90%] flex flex-col lg:flex-row mx-auto px-4 md:px-20 gap-10">
      <LoginRegisterLeftSide paragraph="Let your Business Imagination Run Wild and Grow your Business Faster with ConnectDesk Software" />
      <LoginRightSide />
    </div>
  </MainContainer>
);

export default login;
