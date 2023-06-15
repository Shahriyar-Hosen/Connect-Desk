import { IComponentHeader } from "@Interface";
import React from "react";

const ComponentHeader = ({
  title,
  position,
  children,
  subTitle,
}: IComponentHeader) => {
  return (
    <div className={`text-xl font-semibold text-${position}`}>
      <h3>{title}</h3>
      <h3>{subTitle}</h3>
      {children}
      <div className={`w-full flex pt-2.5 justify-${position}`}>
        <div className="w-[159px] h-[4px] opacity-60 bg-primary "></div>
      </div>
    </div>
  );
};

export default ComponentHeader;
