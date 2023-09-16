"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { IClassName } from "@/Interface";

export const ConnectDesk: FC<IClassName> = ({ className }) => (
  <p
    className={twMerge(
      "text-xl text-secondary font-semibold font-poppins",
      className
    )}
  >
    Connect<span className="text-primary">Desk</span>
  </p>
);
