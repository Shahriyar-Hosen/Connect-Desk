"use client";

import {
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "@Components/Common";
import AllFeatures from "./AllFeatures";

export const SoftwareFeatures = () => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            <ConnectDesk text="xl" /> POS Software
          </>
        }
        subTitle="Features At A Glance"
      />

      <AllFeatures />
    </Container>
  </MainContainer>
);
