import { StaticImageData } from "next/image";

export interface IFeatures {
  icon: StaticImageData;
  title: string;
  des: string;
}

export interface IPackages {
  title: string;
  duration: string;
  price: string;
  features: string[];
}

export interface ICorporateSupport {
  title: string;
  img: StaticImageData;
}
