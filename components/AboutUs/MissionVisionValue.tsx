"use client";

import { missionVisionValueData } from "@/public/Data";
import { FC } from "react";
import { MissionVisionValueCard } from ".";
import { Container, MainContainer } from "..";
import { IIntlTranslator } from "@/Interface";

export const MissionVisionValue: FC<IIntlTranslator> = ({ t }) => (
  <MainContainer>
    <Container>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-20 mt-10">
        {missionVisionValueData.map((item, i) => (
          <MissionVisionValueCard {...item} t={t} key={i} />
        ))}
      </div>
    </Container>
  </MainContainer>
);
