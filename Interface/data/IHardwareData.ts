import { StaticImageData } from "next/image";

export interface IHardwareData {
  name: string;
  image: StaticImageData;
  category: string;
  details: Array<string>;
}
