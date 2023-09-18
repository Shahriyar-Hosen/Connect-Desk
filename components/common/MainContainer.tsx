"use client";

import { IMainContainer } from "@/Interface";
import { FC } from "react";

export const MainContainer: FC<IMainContainer> = ({
  bg = "default",
  children,
  className,
  isRemoveMargin,
  isRemovePadding,
  fullScreen,
}) => (
  <main
    className={`w-full ${!isRemoveMargin && "my-[10px] md:my-[30px]"} ${
      !isRemovePadding && "py-[20px] md:py-[60px]"
    }
    ${
      fullScreen &&
      "h-full min-h-screen w-full flex flex-col justify-center items-center"
    }
     ${
       (bg === "default" && "bg-transparent") ||
       (bg === "primary" && "bg-base-100") ||
       (bg === "secondary" && "bg-base-200")
     } ${className}`}
  >
    {children}
  </main>
);
