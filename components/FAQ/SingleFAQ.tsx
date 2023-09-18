"use client";

import { ISingleFAQ } from "@/Interface";
import { FC, useState } from "react";
import Collapsible from "react-collapsible";

// If you need to keep an FAQ open, use (checked={true}) in the input section

export const SingleFAQ: FC<ISingleFAQ> = ({ answer, question }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapsible
        trigger={
          <div
            className="flex justify-between w-full items-center border-t rounded-none border-primary border-opacity-70 font-poppins py-5"
            onClick={(prv) => setOpen(!prv)}
          >
            <p>{question}</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.8571 9.14286H9.14286V14.8571C9.14286 15.4857 8.62857 16 8 16C7.37143 16 6.85714 15.4857 6.85714 14.8571V9.14286H1.14286C0.514286 9.14286 0 8.62857 0 8C0 7.37143 0.514286 6.85714 1.14286 6.85714H6.85714V1.14286C6.85714 0.514286 7.37143 0 8 0C8.62857 0 9.14286 0.514286 9.14286 1.14286V6.85714H14.8571C15.4857 6.85714 16 7.37143 16 8C16 8.62857 15.4857 9.14286 14.8571 9.14286Z"
                fill="black"
              />
            </svg>
          </div>
        }
        triggerWhenOpen={
          <div
            className="flex justify-between w-full items-center border-t rounded-none border-primary border-opacity-60 font-poppins py-5"
            onClick={(prv) => setOpen(!prv)}
          >
            <p>{question}</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="2"
              viewBox="0 0 16 2"
              fill="none"
            >
              <path
                d="M1 1L15 0.999999"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        }
        triggerClassName="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black"
        triggerOpenedClassName="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black"
      >
        <p className="text-sm lg:text-base pb-5">{answer}</p>
      </Collapsible>
    </>
  );
};
