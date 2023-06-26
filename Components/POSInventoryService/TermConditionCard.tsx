"use client";

import { ListItem } from "@Components/Common";
import { ITermConditionCard } from "@Interface";

const TermConditionCard = ({ termCondition }: ITermConditionCard) => (
  <div className="w-full max-w-[394px] rounded boxShadow p-5 flex flex-col justify-center items-start gap-2.5 bg-[#ffffff] flex-shrink-0">
    {termCondition.map(({ label, active }, i) => (
      <ListItem key={i} label={label} dot="sm" active={active} />
    ))}
  </div>
);

export default TermConditionCard;
