"use client";

import { ComponentHeader, Container, MainContainer } from "@Components/Common";
import { solutions } from "@public/Data";
import Solution from "./Solution";

const PerfectSolution = () => {
  return (
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

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-items-center">
          {solutions.map(({ title }, i) => (
            <Solution key={i} title={title} />
          ))}
        </section>
      </Container>
    </MainContainer>
  );
};

export default PerfectSolution;