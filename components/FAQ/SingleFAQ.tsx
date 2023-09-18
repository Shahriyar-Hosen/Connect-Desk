"use client";

import { ISingleFAQ } from "@/Interface";
import { FC } from "react";

// If you need to keep an FAQ open, use (checked={true}) in the input section

export const SingleFAQ: FC<ISingleFAQ> = ({ answer, question }) => (
  <div className="collapse collapse-plus border-t rounded-none border-primary opacity-70 font-[Poppins]">
    <input type="radio" name="my-accordion-3" />

    <div className="collapse-title text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black">
      {question}
    </div>
    <div className="collapse-content">
      <p>{answer}</p>
    </div>
  </div>
);
