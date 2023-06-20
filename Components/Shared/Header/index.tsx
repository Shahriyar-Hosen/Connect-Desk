"use client";

export * from "./DropdownMenu";
export * from "./Header";
export * from "./LoginAndSign";
export * from "./MenuItem";
export * from "./MenuItems";

import { Container, Logo } from "@Components/Common";
import { LoginAndSign, MenuItems } from ".";

export const Header = () => (
  <Container>
    <nav className="flex justify-between items-center px-5 py-2.5">
      <Logo />

      <div className="flex justify-center items-center">
        <MenuItems />
        <LoginAndSign />
      </div>
    </nav>
  </Container>
);
