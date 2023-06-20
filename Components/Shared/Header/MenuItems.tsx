"use client";

import { navItems } from "@public/Data/common";
import { useState } from "react";
import { DropdownMenu, MenuItem } from ".";

export const MenuItems = () => {
  const [open, setOpen] = useState("");

  return (
    <ul className="menu menu-horizontal px-1 flex">
      {navItems.map(({ label, link, option }, i) => (
        <MenuItem
          key={i}
          label={label}
          link={link}
          option={option}
          setOpen={setOpen}
        >
          {open === label && option && (
            <DropdownMenu option={option} setOpen={setOpen} />
          )}
        </MenuItem>
      ))}
    </ul>
  );
};
