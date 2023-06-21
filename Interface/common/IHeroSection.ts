import { StaticImageData } from "next/image";

export interface IHeroLeft {
  mainText?: JSX.Element | string;
  subText?: JSX.Element | string;
  paragraph?: JSX.Element | string;
  button1: string;
  button2: string;
}
export interface IHeroRight {
  image: StaticImageData;
  pos?: boolean;
}

export interface IHeroSection extends IHeroRight, IHeroLeft {}
