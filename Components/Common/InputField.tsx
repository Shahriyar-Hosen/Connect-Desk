"use client";

import { ChangeEvent } from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  width?: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  label,
  type = "text",
  placeholder,
  width = "full",
  handleOnChange,
}: InputFieldProps) => {
  return (
    <div>
      <p className="text-base font-medium text-neutral mb-3">{label}</p>
      <input
        className={`border ${
          (width === "full" && "w-full") || (width === "half" && "w-1/2")
        } p-3 border-primary  rounded-sm`}
        onChange={(e) => handleOnChange(e)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
