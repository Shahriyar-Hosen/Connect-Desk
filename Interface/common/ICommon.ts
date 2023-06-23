import { StaticImageData } from "next/image";

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

export interface IVideo extends IClassName {
  weight: number;
  height: number;
  url: string;
}
