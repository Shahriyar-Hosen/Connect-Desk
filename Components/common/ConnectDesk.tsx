"use client";

import { IClassName } from "@/Interface";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const ConnectDesk: FC<IClassName> = ({ className }) => (
  <span className={twMerge("text-xl text-secondary font-semibold", className)}>
    Connect<span className="text-primary">Desk</span>
  </span>
);
