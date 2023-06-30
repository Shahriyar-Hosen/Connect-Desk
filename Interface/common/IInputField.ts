"use client";

import { ChangeEvent } from "react";

export interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  width?: "full" | "half" | "auto";
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  otp?: boolean;
}
