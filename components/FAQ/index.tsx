"use client";

import { IFAQ, IIntlTranslator } from "@/Interface";
import { FC } from "react";
import { Container } from "..";
import { SingleFAQ } from "./SingleFAQ";

export const FAQs: FC<IFAQ & IIntlTranslator> = ({
  data,
  limit = data.length,
  t,
}) => (
  <Container className="mt-[60px]">
    {data.slice(0, limit).map((faq, i) => (
      <SingleFAQ key={i} {...faq} t={t} />
    ))}
  </Container>
);
