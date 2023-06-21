"use client";
import { ComponentHeader, Container, MainContainer } from "@Components/Common";
import FAQ from "@Components/FAQ";
import { faqData } from "@public/Data/faq";

export const AskedQuestions = () => (
  <MainContainer>
    <Container>
      <ComponentHeader title="Frequently Asked Questions" />
      <FAQ data={faqData} limit={10} />
    </Container>
  </MainContainer>
);
