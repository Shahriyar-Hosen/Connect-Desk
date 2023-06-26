"use client";

import { Container, MainContainer } from "@Components/Common";
import { missionVisionValueData } from "@public/Data/aboutUs";
import { MissionVisionValueCard } from "./MissionVisionValueCard";

export const MissionVisionValue = () => (
  <MainContainer>
    <Container>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-20 mt-10">
        {missionVisionValueData.map((item, i) => (
          <MissionVisionValueCard {...item} key={i} />
        ))}
      </div>
    </Container>
  </MainContainer>
);
