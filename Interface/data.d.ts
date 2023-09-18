import { StaticImageData } from "next/image";

export interface ISingleFAQ {
  question: string;
  answer: string;
}

export interface IFeaturesPage {
  id: number;
  image: string;
  title: {
    first: string;
    second: string;
    third: string;
  };
  paragraph: string;
}

export interface IHardwareData {
  name: string;
  image: StaticImageData;
  category: string;
  details: Array<string>;
}

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

export interface IMissionVisionValue {
  id: number;
  title: string;
  des: string;
  img: StaticImageData;
}

export interface IPrivatePolicyData {
  title: string;
  details: string[];
}
export interface IPolicy extends IPrivatePolicyData {
  textPosition?: "center" | "left" | "right";
}

export interface IService {
  img: StaticImageData;
  title: string;
  des: string;
}

export interface IVideoTutorial {
  title: string;
  videoUrl: string;
}
