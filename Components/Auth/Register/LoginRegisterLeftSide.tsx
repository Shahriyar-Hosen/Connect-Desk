"use client";

import Image from "next/image";

import { CommonText, ComponentHeader, ConnectDesk } from "@Components/Common";
import { loginLeftImg } from "@public/assets/images";

interface LeftSiteProps {
  paragraph: JSX.Element | string;
  isSubTitle?: boolean;
}

export const LoginRegisterLeftSide = ({
  paragraph,
  isSubTitle,
}: LeftSiteProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      <Image src={loginLeftImg} alt="dfd" />
      <div className="w-[100%]">
        <ComponentHeader
          text="lg"
          title={
            <span>
              Welcome to <ConnectDesk text="xl" />
            </span>
          }
          subTitle={
            isSubTitle && (
              <span className="text-lg">
                Try ConnectDesk Free For{" "}
                <span className="text-primary">7 Days</span>. No Payment
                Required.
              </span>
            )
          }
        />
        <div className="mt-6">
          <CommonText text="lg">{paragraph}</CommonText>
        </div>
      </div>
    </div>
  );
};
