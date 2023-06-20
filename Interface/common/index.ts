import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ILinkedList {
  link: string;
  label: string;
}

export interface INavItems extends ILinkedList {
  option?: ILinkedList[];
}

export interface IDropdownOpen {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IMenuItem extends ILinkedList, IDropdownOpen {
  children?: ReactNode;
  option?: ILinkedList[];
}
export interface IDropdownMenu extends IDropdownOpen {
  option: ILinkedList[];
}
