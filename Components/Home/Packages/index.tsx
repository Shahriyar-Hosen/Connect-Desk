"use client";

import {
  BackgroundImage,
  Button,
  CommonText,
  ComponentHeader,
  Container,
  MainContainer,
} from "@Components/Common";
import { packagesData } from "@public/Data";
import { takaLogo } from "@public/assets";
import { tick } from "@public/assets/icon";
import { packageBg, packageBgLite } from "@public/assets/images";
import Image from "next/image";
import CartTop from "./CartTop";

const Packages = () => {
  return (
    <MainContainer>
      <Container>
        <ComponentHeader
          title={
            <>
              Pricing To <span className="text-primary">Suite</span> All Size
            </>
          }
          subTitle={
            <>
              Of <span className="text-secondary">Business</span>
            </>
          }
        />

        {/* Package Card */}
        <section className="flex justify-center items-start flex-wrap gap-[30px] md:gap-[60px] mt-[30px] md:mt-[60px]">
          {packagesData.map(({ duration, features, price, title }, i) => (
            <BackgroundImage
              key={i}
              img={i % 2 === 0 ? packageBgLite : packageBg}
              className="sm:w-[400px] shadow-lg rounded-[25px]"
            >
              <div className="flex justify-center items-center flex-col pb-7">
                <CartTop title={title} height="h-12 sm:h-14" text="lg" />

                {/*  */}
                <CommonText text="md" className="text-[#1B253F] mt-2 sm:mt-3">
                  {duration}
                </CommonText>

                {/*  */}
                <h6 className="font-semibold text-2xl sm:text-3xl md:text-4xl mt-2.5 flex justify-center items-center gap-1">
                  <Image src={takaLogo} width={21} alt="business package" />{" "}
                  {price}
                </h6>

                {/* Features Card */}
                <div className="mt-3 sm:mt-6 w-[85%] h-auto rounded-[25px]  bg-white pb-6">
                  <CartTop
                    title="Features"
                    height="h-[45px] sm:h-[50px]"
                    text="md"
                  />

                  {/* Features Items */}
                  <div className="flex flex-col items-start justify-center m-3 sm:m-4 gap-1 sm:gap-2">
                    {features.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-start items-start gap-2"
                      >
                        <Image src={tick} className="mt-1" alt="package" />
                        <CommonText text="sm">{item}</CommonText>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purchase Package */}
                <Button
                  variant="primary"
                  rounded
                  text="16"
                  size="lg"
                  className="-mt-[25px]"
                >
                  Purchase Package
                </Button>
              </div>
            </BackgroundImage>
          ))}
        </section>
      </Container>
    </MainContainer>
  );
};

export default Packages;
