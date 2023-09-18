"use client";

import { ComponentHeader, Container, MainContainer } from "@/components";
import { solutions } from "@/public/Data";
import { FC } from "react";
import { Solution } from "./Solution";

export const PerfectSolution: FC = () => (
  <MainContainer bg="secondary">
    <Container>
      <ComponentHeader
        title={
          <span>
            Perfect <span className="text-primary">Solution</span> For Your
          </span>
        }
        subTitle={<span className="text-secondary">Business</span>}
      />

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 gap-y-[60px] justify-items-center mt-[60px]">
        {solutions.map(({ title }, i) => (
          <Solution key={i} title={title} />
        ))}
      </section>
    </Container>
  </MainContainer>
);
