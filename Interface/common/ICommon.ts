export interface ITextAndFont {
  text?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  font?: "Exo" | "Poppins" | "sans";
}
export interface IClassName {
  className?: string;
}

export interface IVideo extends IClassName {
  weight: number;
  height: number;
  url: string;
}
