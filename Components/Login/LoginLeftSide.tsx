import { CommonText, ComponentHeader, ConnectDesk } from "@Components/Common";
import Image from "next/image";
import { loginLeftImg } from "@public/assets/images";

export const LoginLeftSide = () => {
  return (
    <div>
      <Image src={loginLeftImg} alt="dfd" />
      <ComponentHeader
        title={
          <span>
            Welcome to <ConnectDesk />
          </span>
        }
        subTitle={
          <span>
            Try ConnectDesk Free For{" "}
            <span className="text-primary">7 Days</span>. No Payment Required.
          </span>
        }
      />
      <CommonText>
        You’ll get preloaded data or upload your own. Preconfigured processes,
        reports, and dashboards. Guided experiences for every steps.
      </CommonText>
    </div>
  );
};
