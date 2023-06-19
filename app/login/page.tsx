"use client";

import { MainContainer } from "@Components/Common";
import { LoginLeftSide, LoginRightSide } from "@Components/Login";

const login = () => {
  return (
    <MainContainer>
      <div className="flex flex-col lg:flex-row px-4 md:px-20">
        <LoginLeftSide />
        <LoginRightSide />
      </div>
    </MainContainer>
  );
};

export default login;
