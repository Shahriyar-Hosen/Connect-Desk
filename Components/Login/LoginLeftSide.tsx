import { CommonText, ComponentHeader, ConnectDesk } from "@Components/Common";
import { loginLeftImg } from "@public/assets/images";
import Image from "next/image";

export const LoginLeftSide = () => {
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
            <span className="text-lg">
              Try ConnectDesk Free For{" "}
              <span className="text-primary">7 Days</span>. No Payment Required.
            </span>
          }
        />
        <div className="mt-6">
          <CommonText text="lg">
            You’ll get preloaded data or upload your own. Preconfigured
            processes, reports, and dashboards. Guided experiences for every
            steps.
          </CommonText>
        </div>
      </div>
    </div>
  );
};
