"use client";

import { IAuthComponent } from "@/Interface";
import { FC } from "react";

export const AuthComponent: FC<IAuthComponent> = ({
  leftComponent,
  rightComponent,
}) => (
  <div className="w-[100%] flex flex-col lg:flex-row gap-10">
    {leftComponent}
    {rightComponent}
  </div>
);
