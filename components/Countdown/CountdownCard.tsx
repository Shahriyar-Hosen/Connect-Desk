"use client";

import { ICountdownCard } from "@/Interface";
import { FC } from "react";

export const CountdownCard: FC<ICountdownCard> = ({ time, title }) => (
  <div className="flex flex-col">
    <span className="countdown font-mono text-3xl lg:text-5xl">{time}</span>
    {title}
  </div>
);
