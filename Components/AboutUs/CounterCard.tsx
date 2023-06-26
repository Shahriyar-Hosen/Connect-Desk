"use client";

import { ICounterCard } from "@Interface";

export const CounterCard = ({ count, label, title }: ICounterCard) => (
  <div className="flex gap-5 md:gap-9 justify-center items-center lg:items-start flex-col text-center lg:text-start">
    <h1 className="text-4xl md:text-5xl font-extrabold">
      {count}
      <span className="text-primary">{label}</span>
    </h1>
    <p className="text-base md:text-xl font-bold">{title}</p>
  </div>
);
