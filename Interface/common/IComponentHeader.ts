import { ITextAndFont } from "./ICommon";

export interface IComponentHeader extends ITextAndFont {
  position?: "start" | "center" | "end";
  title: string | JSX.Element;
  subTitle?: string | JSX.Element;
}


