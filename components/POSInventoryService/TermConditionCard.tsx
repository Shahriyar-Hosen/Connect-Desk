"use client";

import { IIntlTranslator, ITermConditionCard } from "@/Interface";
import { FC } from "react";
import { ListItem } from "..";

export const TermConditionCard: FC<ITermConditionCard & IIntlTranslator> = ({
  termCondition,
  t,
}) => (
  <div className="w-full max-w-[394px] rounded boxShadow p-5 flex flex-col justify-center items-start gap-2.5 bg-[#ffffff] flex-shrink-0">
    {termCondition.map(({ label, active }, i) => (
      <ListItem
        key={i}
        label={t(label, { ns: "services" })}
        dot="sm"
        active={active}
      />
    ))}
  </div>
);
