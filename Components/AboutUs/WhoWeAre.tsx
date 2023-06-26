"use client";

import { ComponentHeader, Container, MainContainer } from "@Components/Common";
import { WhoWeAreImg } from "./WhoWeAreImg";

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

      <WhoWeAreImg />

      <div className=" grid justify-items-center grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-2.5">
        <h6 className="col-span-1 w-full text-center text-xl md:text-3xl font-semibold">
          Who We Are
        </h6>

        <p className="col-span-2 w-full text-justify md:text-start text-base md:text-xl text-[#797979]">
          ConnectDesk is a fast growing software manufacturing company in
          Bangladesh providing software and solutions to SMEs, NGO’s, government
          agencies, and private companies. Our team is highly experienced in
          developing Web Applications and business software solutions, like POS
          systems, inventory management, accounting, ERP, E-commerce, custom
          solutions, etc. We build software to grow our clients’ businesses.
        </p>
      </div>
    </Container>
  </MainContainer>
);
