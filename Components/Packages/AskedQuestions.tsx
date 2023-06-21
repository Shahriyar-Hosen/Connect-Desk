"use client";
import { ComponentHeader, Container, MainContainer } from "@Components/Common";
import FAQ from "@Components/FAQ";

export const AskedQuestions = () => {
  return (
    <MainContainer>
      <Container>
        <ComponentHeader title="Frequently Asked Questions" />
        <FAQ />
      </Container>
    </MainContainer>
  );
};
