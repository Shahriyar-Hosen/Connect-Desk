import { MouseEventHandler } from "react";
import { IChildrenWithClass } from "./IChildren";

export interface IButton extends IChildrenWithClass {
  variant: "primary" | "secondary";
  width?: "full" | "auto";
  text?: "14" | "16" | "18";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ILinkButton extends IButton {
  link: string;
}
