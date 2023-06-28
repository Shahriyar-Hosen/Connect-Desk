import { Button, CommonText, ConnectDesk } from "@Components/Common";
import Image, { StaticImageData } from "next/image";

interface LeftSiteProps {
  paragraph?: JSX.Element | string;
  isSubTitle?: boolean;
  image: StaticImageData;
  title: JSX.Element | string;
}

export const AuthLeftSide = ({
  paragraph,
  isSubTitle,
  image,
  title,
}: LeftSiteProps) => (
  <div className="w-full flex flex-col justify-center items-center text-center bg-gradient-to-t from-white via-base-100 to-white md:px-20 lg:px-0">
    <div className="md:w-[80%]">
      <Image
        className="max-w-[328px] md:max-w-[428px] mx-auto"
        src={image}
        alt="dfd"
      />
    </div>

    <div className="w-[100%] px-2">
      <h3 className="text-[32px] font-semibold">
        Welcome to <ConnectDesk text="xl" />
      </h3>

      <p className="text-xl font-semibold text-center max-w-[352px] mx-auto opacity-80 mt-4">
        Try ConnectDesk Free For <span className="text-primary">7 Days</span>.
        No Payment Required.
      </p>

      <CommonText className="mt-5 max-w-[422px] mx-auto">
        {paragraph}
      </CommonText>

      <div className="w-full max-w-[380px] mx-auto opacity-90 mt-6">
        <Button variant="primary" text="16" width="full">
          Start My Free 7-Days Trial
        </Button>
      </div>
    </div>
  </div>
);
