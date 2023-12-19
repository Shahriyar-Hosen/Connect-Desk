"use client";

import { IClassName, IIntlLang, IIntlTranslator } from "@/Interface";
import { Container, Logo } from "@/components";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { LoginAndSign, MenuItems, MobileMenuItems } from ".";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header: FC<IClassName & IIntlTranslator & IIntlLang> = ({
  className,
  t,
  lng,
}) => (
  <Container className={twMerge("px-0 pl-2 md:pl-0", className)}>
    <nav className="flex justify-between items-center px-0 md:px-3 lg:px-5 py-2.5">
      <Logo lng={lng} />

      <div className="flex justify-center items-center">
        <div className="dropdown dropdown-bottom dropdown-hover hidden lg:block">
          <MenuItems t={t} />
        </div>

        <LoginAndSign t={t} />
        <LanguageSwitcher lng={lng} />

        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow-md bg-white absolute z-[100] rounded-md w-52"
          >
            <MobileMenuItems t={t} />
            <LoginAndSign t={t} mobile />
          </ul>
        </div>
      </div>
    </nav>
  </Container>
);

export * from "./Avatar";
export * from "./DropdownMenu";
export * from "./LoginAndSign";
export * from "./MenuItem";
export * from "./MenuItems";
export * from "./MobileMenuItem";

{
  /* <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    
  </div>
</div> */
}
