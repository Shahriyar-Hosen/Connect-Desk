import { StaticImageData } from "next/image";

export interface IContactInfo {
  icon: StaticImageData;
  title: string;
  number: string;
  time: string;
}

export interface IInfo {
  name: string;
  option: {
    title: string;
    link: string;
  }[];
}
