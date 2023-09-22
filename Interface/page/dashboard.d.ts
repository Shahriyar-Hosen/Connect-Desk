import { HTMLInputTypeAttribute } from "react";
import { IClassName } from "..";

export interface IDashboardSidebarItem {
  id: string;
  label: string;
  path: string;
}

export interface IHeader {
  title: string;
  link: string;
}

export interface IInput extends IClassName {
  name: string;
  as?: "textarea";
  select?: string[];
  fullWidth?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export interface IFormikError extends IClassName {
  name: string;
  component?: string;
}
