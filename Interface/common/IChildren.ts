import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}
export interface IChildrenWithClass extends IChildren {
  children: ReactNode;
  className?: string;
}
