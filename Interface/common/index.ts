export * from "./IAuthComponent";
export * from "./IBackgroundImage";
export * from "./IButton";
export * from "./IChildren";
export * from "./ICommon";
export * from "./IComponentHeader";
export * from "./IContainer";
export * from "./IHeroSection";
export * from "./IPageHeader";

import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ILinkedList {
  link: string;
  label: string;
}

export interface INavItems extends ILinkedList {
  option?: ILinkedList[];
}

export interface IDropdownOpen {
  setOpen: Dispatch<SetStateAction<string>>;
}

export interface IMenuItem extends ILinkedList, IDropdownOpen {
  children?: ReactNode;
  option?: ILinkedList[];
}
export interface IDropdownMenu extends IDropdownOpen {
  option: ILinkedList[];
}
