"use client";

import { ChangeEvent } from "react";

export interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  width?: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
