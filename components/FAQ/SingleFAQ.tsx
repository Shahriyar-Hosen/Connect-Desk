"use client";

import { ISingleFAQ } from "@/Interface";
import { FC } from "react";
import Collapsible from "react-collapsible";
import { FaqTittle } from "./FaqTittle";

export const SingleFAQ: FC<ISingleFAQ> = ({ answer, question }) => (
  <Collapsible
    trigger={<FaqTittle q={question} />}
    triggerWhenOpen={<FaqTittle q={question} open />}
  >
    <p className="text-sm lg:text-base pb-5">{answer}</p>
  </Collapsible>
);
