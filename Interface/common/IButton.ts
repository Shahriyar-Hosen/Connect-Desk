import { IChildrenWithClass } from "./IChildren";

export interface IButton extends IChildrenWithClass {
  variant: "primary" | "secondary";
  rounded?: boolean;
  width?: "full" | "auto";
  text?: "14" | "16" | "18";
  size?: "sm" | "md" | "lg";
}
