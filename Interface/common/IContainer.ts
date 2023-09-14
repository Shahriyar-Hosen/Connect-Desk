import { IChildrenWithClass } from "./IChildren";

export interface IMainContainer extends IChildrenWithClass {
  bg?: "primary" | "secondary" | "default";
  isRemoveMargin?: boolean;
  isRemovePadding?: boolean;
  fullScreen?: boolean;
}
