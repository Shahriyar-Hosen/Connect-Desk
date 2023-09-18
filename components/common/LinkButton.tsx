"use client";

import Link from "next/link";
import { FC } from "react";

import { ILinkButton } from "@/Interface";
import { Button } from ".";

export const LinkButton: FC<ILinkButton> = ({ link, children, ...props }) => (
  <Link href={link}>
    <Button {...props}>{children}</Button>
  </Link>
);
