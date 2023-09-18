import { IPackages } from ".";

export interface ICartTop {
  title: string;
  height: string;
  text: "md" | "lg";
}

export interface IPackageCard extends IPackages {
  index: number;
}
