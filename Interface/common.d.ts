import { StaticImageData } from "next/image";
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
export interface IChildrenWithIntl {
  children: ReactNode;
  params: { lng: string };
}

export interface IChildrenWithClass extends IChildren {
  children: ReactNode;
  className?: string;
}

export interface ILabelAndIcon {
  icon: StaticImageData;
  label: string;
}

// md -> 20
export interface ITextAndFont {
  text?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  font?: "exo" | "poppins" | "sans";
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

export interface IWrapper extends IChildrenWithClass {
  header?: boolean;
  footer?: boolean;
}

export interface IFooterTitle extends IChildrenWithClass {
  text?: "sm" | "xl";
}
export interface IVideo extends IClassName {
  url: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export interface ILinkedList {
  link: string;
  label: string;
}

export interface ILabelIcon {
  icon: StaticImageData;
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
}
export interface IDropdownMenu extends IDropdownOpen {
  option?: ILinkedList[];
  label?: string;
  open?: string;
}

export interface ITimeProps {
  year: string;
  month: string;
  day: string;
  fulDate?: string;
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
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
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
  pos?: boolean;
  lng?: string;
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

export interface IIntlParams {
  params: { lng: string };
}
export interface IIntlTranslator {
  t: TFunction<string | string[], string>;
}

export interface IIntlLang {
  lng: string;
}

export interface IIntlLangWithTranslator {
  lng?: string;
  t?: TFunction<string | string[], string>;
}
