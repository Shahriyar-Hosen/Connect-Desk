/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ITimeProps } from "@/Interface";
import { FC, useEffect, useState } from "react";
import { CountdownCard } from "./CountdownCard";

export const Countdown: FC<ITimeProps> = ({
  fulDate,
  day = "01",
  month = "12",
  year = "2024",
}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = new Date(fulDate || `${year}-${month}-${day}T00:00:00`);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <CountdownCard time={days} title="days" />
      <CountdownCard time={hours} title="hours" />
      <CountdownCard time={minutes} title="min" />
      <CountdownCard time={seconds} title="sec" />
    </div>
  );
};
