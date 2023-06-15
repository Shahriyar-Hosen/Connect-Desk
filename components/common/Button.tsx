import { IButton } from "@Interface";

export const Button = ({
  children,
  variant,
  text = "14",
  width = "auto",
  rounded,
}: IButton) => {
  const primary = "bg-primary text-white";
  const secondary = "bg-white text-primary";

  return (
    <button
      className={`${
        (variant === "secondary" && secondary) ||
        (variant === "primary" && primary)
      } ${(text === "14" && "text-sm") || (text === "16" && "text-base")} ${
        rounded ? "rounded-full" : "rounded-[4px]"
      } border font-medium border-primary  px-[49px] py-[9px] ${
        width === "full" && "w-full"
      }`}
    >
      {children}
    </button>
  );
};
