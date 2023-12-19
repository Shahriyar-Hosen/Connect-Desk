"use client";

import { FC, useCallback, useRef, useState } from "react";

import { useClickOutSide } from "@/hooks";
import { navItems } from "@/public/Data";
import { DropdownMenu, MenuItem } from ".";
import { IIntlTranslator } from "@/Interface";

export const MobileMenuItems: FC<IIntlTranslator> = ({ t }) => {
  const [open, setOpen] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const domeNode = useClickOutSide();

  domeNode(
    menuRef,
    useCallback(() => {
      setOpenMenu(false);
    }, [])
  );

  return (
    <ul className="menu menu-vertical">
      {navItems.map(({ label, link, option }, i) => (
        <MenuItem
          key={i}
          label={label}
          link={link}
          option={option}
          setOpen={setOpen}
          handleDropdownHover={() => {}}
          isMobile
          open=""
          t={t}
        >
          {open === label && option && (
            <div className="dropdown dropdown-bottom lg:hidden" ref={menuRef}>
              <DropdownMenu t={t} option={option} setOpen={setOpen} />
            </div>
          )}
        </MenuItem>
      ))}
    </ul>
  );
};
