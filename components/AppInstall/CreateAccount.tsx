"use client";

import { createAccount } from "@/public/Data";
import { FC } from "react";
import { CommonText, ListItem } from "..";

export const CreateAccount: FC = () => (
  <div className="max-w-[431px]">
    <CommonText className="font-medium">How to create an account:</CommonText>

    <div className="mt-3 md:mt-4 flex flex-col justify-center items-start gap-1">
      {createAccount.map((item) => (
        <ListItem label={item} key={item} />
      ))}
    </div>
  </div>
);