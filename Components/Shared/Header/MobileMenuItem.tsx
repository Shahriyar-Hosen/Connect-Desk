"use client";

import { useCallback, useRef, useState } from "react";

import { useClickOutSide } from "@/hooks";
import { navItems } from "@/public/data";
import { DropdownMenu, MenuItem } from ".";

export const MobileMenuItems = () => {
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

  const handleMobileMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

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
        >
          {open === label && option && (
            <div className="dropdown dropdown-bottom lg:hidden" ref={menuRef}>
              <DropdownMenu option={option} setOpen={setOpen} />
            </div>
          )}
        </MenuItem>
      ))}
    </ul>
  );
};
