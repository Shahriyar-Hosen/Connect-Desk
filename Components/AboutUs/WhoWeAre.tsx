"use client";

import { ComponentHeader, Container, MainContainer } from "@Components/Common";
import { aboutTop1, aboutTop2 } from "@public/assets/images";
import Image from "next/image";

export const WhoWeAre = () => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            About Our <span className="text-primary">Company</span>
          </>
        }
        subText="ConnectDesk is a software development company. The company works with business solutions for SME traders."
      />

      <div className="grid gap-2.5 grid-cols-3 max-w-6xl mx-auto mt-[60px]">
        <Image src={aboutTop1} className="w-full col-span-2" alt="About Us" />
        <Image src={aboutTop2} className="w-full col-span-1" alt="About Us" />
      </div>
    </Container>
  </MainContainer>
);
