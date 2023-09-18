import Image from "next/image";
import { FC } from "react";

import { LeftSiteProps } from "@/Interface";
import { Button, CommonText } from "..";

export const AuthLeftSide: FC<LeftSiteProps> = ({
  paragraph,
  isSubTitle,
  image,
  title,
  bottomBtn,
  JSXTitle,
}) => (
  <div className="w-full flex flex-col justify-center items-center text-center bg-gradient-to-t from-white via-base-100 to-white md:px-20 lg:px-0">
    <div className="md:w-[80%]">
      <Image
        className="w-[80%] sm:w-full max-w-[328px] md:max-w-[428px] mx-auto"
        src={image}
        alt="dfd"
      />
    </div>

    <div className="w-[100%] px-2">
      {JSXTitle && (
        <h3 className="text-2xl md:text-[26px] lg:text-[32px] font-semibold">
          {JSXTitle}
        </h3>
      )}
      {title && (
        <h3 className="mt-5 lg:mt-10 text-lg lg:text-2xl font-semibold">
          {title}
        </h3>
      )}

      {isSubTitle ? (
        <p className="text-base md:text-lg lg:text-xl font-semibold text-center max-w-[352px] mx-auto opacity-80 mt-4">
          Try ConnectDesk Free For <span className="text-primary">7 Days</span>.
          No Payment Required.
        </p>
      ) : null}

      <CommonText className="mt-5 max-w-[422px] mx-auto">
        {paragraph}
      </CommonText>

      {bottomBtn ? (
        <div className="w-full max-w-[380px] mx-auto opacity-90 mt-6">
          <Button variant="primary" text="16" width="full">
            Start My Free 7-Days Trial
          </Button>
        </div>
      ) : null}
    </div>
  </div>
);
