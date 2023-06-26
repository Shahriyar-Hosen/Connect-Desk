"use client";

import { ComponentHeader, Container, MainContainer } from "@Components/Common";

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
      <h1>WhoWeAre</h1>
    </Container>
  </MainContainer>
);
