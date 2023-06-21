"use client";

import { CommonText } from "@Components/Common";
import { createAccount } from "@public/Data";

const CreateAccount = () => (
  <div className="max-w-[431px]">
    <CommonText className="font-medium">How to create an account:</CommonText>

    <div className="mt-3 md:mt-4 flex flex-col justify-center items-start gap-1">
      {createAccount.map((item) => (
        <div key={item} className="flex justify-start items-center gap-2">
          <div className="w-1.5 h-1.5 bg-black rounded-full" />
          <CommonText>{item}</CommonText>
        </div>
      ))}
    </div>
  </div>
);

export default CreateAccount;
