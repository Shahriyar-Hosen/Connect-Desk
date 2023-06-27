"use client";

import { ICounterCard } from "@Interface";
import React from "react";
import CountUp from "react-countup";

export const CounterCard = ({ count, label, title }: ICounterCard) => (
  <div className="flex gap-5 md:gap-9 justify-center items-center lg:items-start flex-col text-center lg:text-start">
    <h1 className="text-4xl md:text-5xl font-extrabold">
      <CountUp start={0} end={count} duration={2} delay={0} />
      <span className="text-primary">{label}</span>
    </h1>
    <p className="text-base md:text-xl font-bold">{title}</p>
  </div>
);
