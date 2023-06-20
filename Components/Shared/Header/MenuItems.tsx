"use client";

import { navItems } from "@public/Data/common";
import { useState } from "react";
import { DropdownMenu, MenuItem } from ".";

export const MenuItems = () => {
  const [open, setOpen] = useState(false);

  return (
    <ul className="menu menu-horizontal px-1 hidden lg:flex">
      {navItems.map(({ label, link, option }, i) => (
        <MenuItem
          key={i}
          label={label}
          link={link}
          option={option}
          setOpen={setOpen}
        >
          {open && option && <DropdownMenu option={option} setOpen={setOpen} />}
        </MenuItem>
      ))}
    </ul>
  );
};
