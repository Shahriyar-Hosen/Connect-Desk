import { CommonText, ComponentHeader, ConnectDesk } from "@Components/Common";
import Image, { StaticImageData } from "next/image";

interface LeftSiteProps {
  paragraph?: JSX.Element | string;
  isSubTitle?: boolean;
  image: StaticImageData;
  title: JSX.Element | string;
}

export const LoginRegisterLeftSide = ({
  paragraph,
  isSubTitle,
  image,
  title,
}: LeftSiteProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center bg-gradient-to-t from-white via-base-100 to-white md:px-20 lg:px-0 lg:my-20">
      <div className="md:w-[80%]">
        <Image
          className="max-w-[328px] md:max-w-[428px] mx-auto"
          src={image}
          alt="dfd"
        />
      </div>
      <div className="w-[100%] px-2">
        <ComponentHeader
          text="lg"
          title={title}
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
