"use client";

import { IMainContainer } from "@Interface";

export const MainContainer = ({
  bg = "default",
  children,
  className,
}: IMainContainer) => (
  <main
    className={`w-full my-[60px] py-[60px] ${
      (bg === "default" && "bg-transparent") ||
      (bg === "primary" && "bg-base-100") ||
      (bg === "secondary" && "bg-base-200")
    } ${className}`}
  >
    {children}
  </main>
);
