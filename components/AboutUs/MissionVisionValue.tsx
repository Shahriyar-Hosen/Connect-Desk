"use client";

import { missionVisionValueData } from "@/public/Data";
import { FC } from "react";
import { MissionVisionValueCard } from ".";
import { Container, MainContainer } from "..";

export const MissionVisionValue: FC = () => (
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
