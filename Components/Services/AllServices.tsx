"use client";

import {
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "@Components/Common";

export const AllServices = () => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            All Services Of <ConnectDesk text="lg" font="Poppins" />
          </>
        }
      />
    </Container>
  </MainContainer>
);
