import { Dispatch, SetStateAction } from "react";

export type IUserType = "Business Login" | "Client Login";

export interface IToggleButton {
  userType: IUserType;
  setUserType: Dispatch<SetStateAction<IUserType>>;
}

export interface IAuthNavigate {
  label?: string;
  link?: string;
  btnText?: string;
}
export interface IAuthTopSection extends IToggleButton {
  label: string;
}

export interface IAgreeSection {
  label1: string | JSX.Element;
  label2?: string;
  labelLink2?: string;
}
