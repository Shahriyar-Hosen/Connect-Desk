"use client";

import { Container, Logo } from "@Components/Common";
import LoginAndSign from "./LoginAndSign";
import MenuItems from "./MenuItems";

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
