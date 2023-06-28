"use client";

import { InputFieldProps } from "@Interface";

export const InputField = ({
  label,
  placeholder,
  type = "text",
  width = "full",
  handleOnChange,
}: InputFieldProps) => (
  <div className="w-full my-2">
    <p className="text-base font-medium text-neutral mb-3">{label}</p>
    <input
      className={`border border-primary border-opacity-20 rounded-md p-1.5 md:p-2 lg:p-3 text-sm focus:outline-primary ${
        (width === "full" && "w-full") || (width === "half" && "w-1/2")
      }`}
      onChange={(e) => handleOnChange(e)}
      type={type}
      placeholder={placeholder}
    />
  </div>
);
