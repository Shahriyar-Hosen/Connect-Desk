"use client";

import { IMainContainer } from "@Interface";

export const MainContainer = ({
  bg = "default",
  children,
  className,
  isRemoveMargin,
}: IMainContainer) => (
  <main
    className={`w-full ${
      !isRemoveMargin && "my-[10px] md:my-[30px]"
    } py-[20px] md:py-[60px] ${
      (bg === "default" && "bg-transparent") ||
      (bg === "primary" && "bg-base-100") ||
      (bg === "secondary" && "bg-base-200")
    } ${className}`}
  >
    {children}
  </main>
);
