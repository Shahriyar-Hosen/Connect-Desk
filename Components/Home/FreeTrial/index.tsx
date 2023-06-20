"use client";
import { BackgroundImage, Container, MainContainer } from "@Components/Common";
import { freeTrial } from "@public/assets/images";

const FreeTrial = () => (
  <MainContainer>
    <Container className="flex justify-center items-center">
      <BackgroundImage
        img={freeTrial}
        className="min-h-[150px] max-w-[980px] px-20 pb-[25px] pt-[30px]"
      >
        <div className="">FreeTrial</div>
      </BackgroundImage>
    </Container>
  </MainContainer>
);

export default FreeTrial;
