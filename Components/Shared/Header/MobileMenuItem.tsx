"use client";

import useClickOutSide from "@hooks/useClickOutside";
import { navItems } from "@public/Data/common";
import { useCallback, useRef, useState } from "react";
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
