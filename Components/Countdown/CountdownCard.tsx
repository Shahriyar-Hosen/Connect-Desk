"use client";

import { ICountdownCard } from "@Interface";

export const CountdownCard = ({ time, title }: ICountdownCard) => (
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">{time}</span>
    {title}
  </div>
);
