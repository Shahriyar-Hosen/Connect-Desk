"use client";

import {
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "@Components/Common";

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
    </Container>
  </MainContainer>
);
