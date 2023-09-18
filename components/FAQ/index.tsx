"use client";

import { IFAQ } from "@/Interface";
import { FC } from "react";
import { Container } from "..";
import { SingleFAQ } from "./SingleFAQ";

export const FAQs: FC<IFAQ> = ({ data, limit = data.length }) => (
  <Container className="mt-[60px]">
    {data.slice(0, limit).map((faq, i) => (
      <SingleFAQ key={i} {...faq} />
    ))}
  </Container>
);
