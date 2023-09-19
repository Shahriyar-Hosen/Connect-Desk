"use client";

import { Button, CommonText, Container, MainContainer } from "@/components";
import { Wrapper } from "@/components/Shared";
import { userGuide } from "@/public/assets/images";
import Image from "next/image";

const UserGuide = () => (
  <Wrapper>
    <MainContainer>
      <Container className="flex justify-center items-center flex-col-reverse md:flex-row gap-10 md:gap-20">
        <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-[30px]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            User Guide
          </h2>

          <CommonText className="w-full max-w-[432px]">
            A user guide or product guide is an instructional material that
            accompanies your product, service or system to the end users and
            helps them use it. It is also known as a user manual, product manual
            or instruction manual.
          </CommonText>

          <Button variant="primary" className="mt-2.5">
            Download User Manual
          </Button>
        </div>

        <Image
          src={userGuide}
          className="w-[80%] sm:w-[50%] md:max-w-[376px] lg:max-w-[476px] xl:max-w-[576px]"
          alt=""
        />
      </Container>
    </MainContainer>
  </Wrapper>
);

export default UserGuide;
