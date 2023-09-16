import { StaticImageData } from "next/image";
import { NextRouter } from "next/router";
import {
  ChangeEvent,
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
} from "react";

export interface IClassName {
  className?: string;
}

export interface IChildren {
  children: ReactNode;
}

export interface IChildrenWithClass extends IChildren {
  children: ReactNode;
  className?: string;
}

export interface ILabelAndIcon {
  icon: StaticImageData;
  label: string;
}

export interface ITextAndFont {
  text?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  font?: "Exo" | "Poppins" | "sans";
}

export interface IConnectDesk extends ITextAndFont {
  logo?: boolean;
}

export interface IListItem {
  label: string;
  dot?: "sm" | "md";
  active?: boolean;
}

export type INavFooterHidePath =
  | "/register"
  | "/login"
  | "forget-password"
  | "/otp"
  | "/confirm-password";

export interface IVideo extends IClassName {
  url: string;
  size?: "sm" | "md" | "lg" | "xl";
}

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

export interface ITimeProps {
  targetDate: Date;
}

export interface ICountdownCard {
  title: string;
  time: number;
}

export interface IBackgroundImage extends IChildrenWithClass {
  img: StaticImageData;
  hidden?: "sm" | "md" | "lg";
}

export interface IAuthComponent {
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
}

export interface IBlogs {
  postDate: string;
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

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

export interface IComponentHeader extends ITextAndFont {
  position?: "start" | "center" | "end";
  title: string | JSX.Element;
  subTitle?: string | JSX.Element | boolean;
  subText?: string;
  about?: boolean;
}

export interface IMainContainer extends IChildrenWithClass {
  bg?: "primary" | "secondary" | "default";
  isRemoveMargin?: boolean;
  isRemovePadding?: boolean;
  fullScreen?: boolean;
}
export interface IHeroLeft {
  mainText?: JSX.Element | string;
  subText?: JSX.Element | string;
  paragraph?: JSX.Element | string;
  button1?: string;
  button2?: string;
  service?: boolean;
}

export interface IHeroRight {
  image: StaticImageData;
  pos?: boolean;
}

export interface IHeroSection extends IHeroRight, IHeroLeft {}

export interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  width?: "full" | "half" | "auto";
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  otp?: boolean;
}
export interface IPageHeader {
  pageName: string;
  mainTitle: JSX.Element | string;
  subTitle?: JSX.Element | string;
}
