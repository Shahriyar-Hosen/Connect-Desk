"use client";

import { Field } from "formik";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { IInput } from "@/Interface";
import { FormikError } from "./FormikError";

export const Input: FC<IInput> = ({
  as,
  name,
  type,
  select,
  fullWidth,
  className,
  placeholder,
}) => {
  const allClassName = `outline-none text-black text-base md:text-lg w-full border border-primary rounded-[5px] py-2 px-3`;

  return (
    <section
      className={twMerge(
        `w-full lg:w-[512px] lg:max-w-[512px] input-group-with relative ${
          as === "textarea" ? "h-[80px] items-end" : "h-16 items-center"
        }`,
        fullWidth
      )}
    >
      {(as === "textarea" && (
        <Field
          as="textarea"
          name={name}
          placeholder={placeholder}
          className={twMerge(
            `${allClassName} ${as === "textarea" ? "h-full" : "h-7"}`,
            className
          )}
        />
      )) ||
        (select && (
          <Field
            as="select"
            id={name}
            name={name}
            className={twMerge(allClassName, "py-2.5")}
          >
            <option value="">Select a {name}</option>
            {select.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </Field>
        )) || (
          <Field
            type={type}
            name={name}
            placeholder={placeholder}
            className={twMerge(allClassName, className)}
          />
        )}

      <FormikError name={name} component="div" />
    </section>
  );
};
