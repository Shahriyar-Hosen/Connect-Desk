import { StaticImageData } from "next/image";
import { NextRouter } from "next/router";

export interface ITextAndFont {
  text?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  font?: "Exo" | "Poppins" | "sans";
}
export interface IClassName {
  className?: string;
}

export interface IListItem {
  label: string;
  dot?: "sm" | "md";
  active?: boolean;
}

export interface ILabelAndIcon {
  icon: StaticImageData;
  label: string;
}
export interface IVideo extends IClassName {
  url: string;
  size?: "sm" | "md" | "lg" | "xl";
}

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
  handleDropdownLeave?: () => void;
  handleDropdownHover: (label: string) => void;
  isMobile?: boolean;
  open: string;
  router?: NextRouter;
}
export interface IDropdownMenu extends IDropdownOpen {
  option?: ILinkedList[];
  label?: string;
  open?: string;
}
