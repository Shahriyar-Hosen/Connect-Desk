"use client";

import { IWrapper } from "@/Interface";
import { FC } from "react";
import { Footer, Header } from ".";

export const Wrapper: FC<IWrapper> = ({
  header,
  footer,
  children,
  className,
}) => (
  <main className={className}>
    <Header className={header ? "hidden" : "block"} />
    {children}
    <Footer className={footer ? "hidden" : "block"} />
  </main>
);
