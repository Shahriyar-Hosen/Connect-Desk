import { IChildrenWithClass } from "@Interface/common";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export type IUserType = "Business Login" | "Client Login";

export interface IToggleButton {
  userType: IUserType;
  setUserType: Dispatch<SetStateAction<IUserType>>;
}

export interface IToggleButtonOptional {
  userType?: IUserType;
  setUserType?: Dispatch<SetStateAction<IUserType>>;
}

export interface IAuthNavigate {
  label?: string;
  link?: string;
  btnText?: string;
}
export interface IAuthTopSection extends IToggleButtonOptional {
  label: string;
  labelType?: "title" | "normal";
}

export interface IAgreeSection {
  label1: string | JSX.Element;
  label2?: string;
  labelLink2?: string;
}

export interface LeftSiteProps {
  paragraph?: JSX.Element | string;
  isSubTitle?: boolean;
  image: StaticImageData;
  title: JSX.Element | string;
  bottomBtn?: boolean;
  titleType?: "JSX" | "title";
}

export interface IAuthMainRightSide
  extends IChildrenWithClass,
    IToggleButtonOptional {
  agreeSectionLabel1?: string | JSX.Element;
  agreeSectionLabel2?: string;
  agreeSectionLabelLink2?: string;
  authTopLabel: string;
  authTopLabelType?: "title" | "normal";
  btnText: string;
  authNavigateLabel?: string;
  authNavigateLink?: string;
  authNavigateBtnText?: string;
  maxWidth: string;
}
