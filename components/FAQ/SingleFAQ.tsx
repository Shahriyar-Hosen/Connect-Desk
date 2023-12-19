"use client";

import { IIntlTranslator, ISingleFAQ } from "@/Interface";
import { FC } from "react";
import Collapsible from "react-collapsible";
import { FaqTittle } from "./FaqTittle";

export const SingleFAQ: FC<ISingleFAQ & IIntlTranslator> = ({
  answer,
  question,
  t,
}) => (
  <Collapsible
    trigger={<FaqTittle q={t(question)} />}
    triggerWhenOpen={<FaqTittle q={t(question)} open />}
  >
    <p className="text-sm lg:text-base pb-5">{t(answer)}</p>
  </Collapsible>
);
