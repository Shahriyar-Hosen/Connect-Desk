import { StaticImageData } from "next/image";
import { IChildrenWithClass } from "./IChildren";

export interface IBackgroundImage extends IChildrenWithClass {
  img: StaticImageData;
  hidden?: "sm" | "md" | "lg";
}
