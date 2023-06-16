import { IChildren } from "@Interface";

interface ICommonText extends IChildren {
  size?: "sm" | "md" | "lg";
}

export const CommonText = ({ children, size = "md" }: ICommonText) => (
  <p
    className={`font-normal ${
      (size === "sm" && "text-xs") ||
      (size === "md" && "text-sm") ||
      (size === "lg" && "text-base")
    }`}
  >
    {children}
  </p>
);
