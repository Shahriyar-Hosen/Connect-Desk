"use client";

import { InputFieldProps } from "@Interface";

export const InputField = ({
  label,
  placeholder,
  type = "text",
  width = "full",
  handleOnChange,
  otp,
}: InputFieldProps) => (
  <div className={`${width === "auto" ? "w-auto" : "w-full"} my-2`}>
    <p className="text-base font-medium text-neutral mb-3">{label}</p>
    <input
      className={`border border-primary border-opacity-20 rounded-md p-1.5 md:p-2 lg:p-3 text-sm focus:outline-primary ${
        otp && "w-9 h-10 sm:w-10 sm:h-11 md:w-12 md:h-14"
      } ${
        (width === "full" && "w-full") ||
        (width === "half" && "w-1/2") ||
        (width === "auto" && "w-auto")
      }`}
      onChange={(e) => handleOnChange(e)}
      type={type}
      placeholder={placeholder}
    />
  </div>
);
