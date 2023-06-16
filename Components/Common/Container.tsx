"use client";

import { IChildrenWithClass } from "@Interface";

export const Container = ({ children, className }: IChildrenWithClass) => {
  return (
    <section
      className={`w-[90%] xl:w-full max-w-[1440px] sm:w-full container mx-auto ${className}`}
    >
      {children}
    </section>
  );
};
