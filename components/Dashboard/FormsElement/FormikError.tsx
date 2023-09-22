"use client";

import { ErrorMessage } from "formik";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { IFormikError } from "@/Interface";

export const FormikError: FC<IFormikError> = ({
  name,
  component = "div",
  className,
}) => (
  <ErrorMessage
    name={name}
    component={component}
    className={twMerge(
      "text-red-600 absolute -bottom-[2px] left-[5px]",
      className
    )}
  />
);
