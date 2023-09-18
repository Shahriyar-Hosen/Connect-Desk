"use client";

import { IChildrenWithClass } from "@/Interface";

export const Container = ({ children, className }: IChildrenWithClass) => (
  <section
    className={`w-[95%] xl:w-full max-w-[1440px] sm:w-full px-2.5 container mx-auto ${className}`}
  >
    {children}
  </section>
);
