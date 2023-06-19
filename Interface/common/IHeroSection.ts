import { StaticImageData } from "next/image";

export interface IHeroSection {
  image?: StaticImageData;
  mainText?: JSX.Element | string;
  subText?: JSX.Element | string;
  paragraph?: JSX.Element | string;
  button?: JSX.Element;
}
