"use client";

import Image from "next/image";

import {
  BackgroundImage,
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
} from "@Components/Common";
import { ICorporateSupport } from "@Interface";
import { corporateSupport } from "@public/Data";
import { homeSupportBg, supportLeftImg } from "@public/assets/images";

const Support = () => (
  <BackgroundImage img={homeSupportBg} className="my-2.5 md:my-5 min-h-full">
    <Container className="flex flex-col md:flex-row justify-center items-center gap-[5%] pt-2.5 pb-10 md:pb-16 ">
      <div className="w-full md:w-[50%] flex justify-center items-center">
        <Image
          src={supportLeftImg}
          className="w-[85%] sm:w-[60%] md:w-full"
          alt=""
        />
      </div>
      <div className="w-fit md:w-[50%] flex flex-col justify-center items-start md:justify-start gap-3 md:gap-4 md:pr-5 lg:pr-0 md:pt-12 lg:pt-0">
        <ComponentHeader
          title={
            <>
              <ConnectDesk text="lg" /> Deliver A
            </>
          }
          subTitle="Corporate Support For All Time"
          position="start"
        />

        <CommonText className="max-w-[415px]">
          When utilizing the software, issues and misunderstandings are quite
          frequent. Our professional support team is here to help you with these
          solutions.
        </CommonText>

        {corporateSupport.map((props, i) => (
          <div
            key={i}
            className={`w-full max-w-[415px] flex items-center justify-center ${
              i % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <SupportCard {...props} />
          </div>
        ))}
      </div>
    </Container>
  </BackgroundImage>
);

export default Support;

const SupportCard = ({ img, title }: ICorporateSupport) => (
  <div className="w-full max-w-[313px] rounded-md shadow-md flex justify-start items-center p-2.5 bg-white gap-2.5">
    <Image src={img} alt="24/7 Free Email Support" />
    <CommonText className="text-primary font-semibold max-w-[70%]" text="xl">
      {title}
    </CommonText>
  </div>
);
