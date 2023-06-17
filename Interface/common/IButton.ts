import { IChildren } from "./IChildren";

export interface IButton extends IChildren {
  variant: "primary" | "secondary";
  rounded?: boolean;
  width?: "full" | "auto";
  text?: "14" | "16" | "18";
  size?: "sm" | "md" | "lg";
}
