"use client";

import { MainContainer } from "@Components/Common";
import { LoginRightSide } from "@Components/Login";
import { LoginRegisterLeftSide } from "@Components/Register";

const login = () => {
  return (
    <MainContainer>
      <div className="flex flex-col lg:flex-row px-4 md:px-20 gap-10">
        <LoginRegisterLeftSide paragraph="Let your Business Imagination Run Wild and Grow your Business Faster with ConnectDesk Software" />
        <LoginRightSide />
      </div>
    </MainContainer>
  );
};

export default login;
