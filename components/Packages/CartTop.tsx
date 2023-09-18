"use client";

import { ICartTop } from "@/Interface";
import { FC } from "react";

export const CartTop: FC<ICartTop> = ({ title, height, text }) => (
  <div
    className={`w-full bg-primary flex justify-center items-center rounded-t-[25px] ${height}`}
  >
    <h5
      className={`font-semibold text-white ${
        text === "lg" ? "text-lg sm:text-xl" : "text-sm sm:text-lg"
      }`}
    >
      {title}
    </h5>
  </div>
);
