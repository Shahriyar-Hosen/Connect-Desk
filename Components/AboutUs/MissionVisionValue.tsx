"use client";

import { ComponentHeader, Container, MainContainer } from "@Components/Common";

export const MissionVisionValue = () => {
  return (
    <MainContainer>
      <Container>
        <div className="max-w-6xl mx-auto">
          <div>
            <ComponentHeader
              title="Our Mission"
              position="start"
              text="lg"
              about
            />
          </div>
        </div>
      </Container>
    </MainContainer>
  );
};
