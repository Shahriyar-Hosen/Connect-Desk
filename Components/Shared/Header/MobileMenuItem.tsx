"use client";

import { navItems } from "@public/Data/common";
import { useState } from "react";
import { DropdownMenu, MenuItem } from ".";

export const MobileMenuItems = () => {
  const [open, setOpen] = useState("");

  return (
    <ul className="menu menu-vertical">
      {navItems.map(({ label, link, option }, i) => (
        <MenuItem
          key={i}
          label={label}
          link={link}
          option={option}
          setOpen={setOpen}
        >
          {open === label && option && (
            <div className="dropdown dropdown-left lg:hidden">
              <DropdownMenu option={option} setOpen={setOpen} />
            </div>
          )}
        </MenuItem>
      ))}
    </ul>
  );
};
