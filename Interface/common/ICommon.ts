export interface ITextAndFont {
  text?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
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
