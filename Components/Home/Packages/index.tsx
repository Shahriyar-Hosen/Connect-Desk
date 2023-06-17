"use client";

import {
  CommonText,
  ComponentHeader,
  Container,
  MainContainer,
} from "@Components/Common";
import { takaLogo } from "@public/assets";
import { rectangle } from "@public/assets/shape";
import Image from "next/image";

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
        <section className="flex justify-center items-center mt-[30px] md:mt-[60px]">
          <div className="w-full sm:w-[499px] max-w-[499px] h-[762px] bg-[#02684833] rounded-[25px] relative">
            <div className="absolute top-0 z-10 overflow-hidden">
              <Image src={rectangle} alt="" />
            </div>

            <div className="absolute w-full z-10 overflow-hidden rounded-t-[25px] flex flex-col items-center">
              <div className="w-full h-20 bg-primary flex justify-center items-center">
                <h5 className="font-semibold text-2xl sm:text-3xl text-white">
                  Corporate Package
                </h5>
              </div>
              <CommonText text="lg" className="text-[#1B253F] mt-[18px]">
                Per business / 12 months
              </CommonText>

              <h6 className="font-semibold text-[52px] mt-[10px] flex justify-center items-center gap-1">
                <Image src={takaLogo} width={21} alt="" /> 19,999
              </h6>
            </div>
          </div>
        </section>
      </Container>
    </MainContainer>
  );
};

export default Packages;
