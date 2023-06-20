"use client";
import { ILinkButton } from "@Interface";
import Link from "next/link";
import { Button } from "./Button";

export const LinkButton = ({ link, children, ...props }: ILinkButton) => {
  return (
    <Link href={link}>
      <Button {...props}>{children}</Button>
    </Link>
  );
};
