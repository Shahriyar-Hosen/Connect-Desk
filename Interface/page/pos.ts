import { StaticImageData } from "next/image";

export interface IPOSInventoryService {
  icon: StaticImageData;
  title: string;
}

export interface ITermCondition {
  label: string;
  active?: boolean;
}

export interface ITermConditionCard {
  termCondition: ITermCondition[];
}
