"use client";

import { Container } from "@Components/Common";
import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: "url(public/assets/images/heroBg.png)" }}
      className={`lg:my-8 my-4`}
    >
      <Container>
        <div className="flex flex-col-reverse lg:flex-row lg:w-[80%] w-[100%] m-auto">
          <div className="lg:w-[80%] w-[100%]">
            <HeroLeft />
          </div>
          <div className=" w-full flex justify-center align-middle">
            <HeroRight />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
