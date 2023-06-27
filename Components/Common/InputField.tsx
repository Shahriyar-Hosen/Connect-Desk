"use client";

import { InputFieldProps } from "@Interface";

export const InputField = ({
  label,
  type = "text",
  placeholder,
  width = "full",
  handleOnChange,
}: InputFieldProps) => {
  return (
    <div className="w-full my-2">
      <p className="text-base font-medium text-neutral mb-3">{label}</p>
      <input
        className={`border border-primary border-opacity-20 rounded-md ${
          (width === "full" && "w-full") || (width === "half" && "w-1/2")
        } p-3`}
        onChange={(e) => handleOnChange(e)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
