"use client";

import { navItems } from "@public/Data/common";
import { useState } from "react";
import { DropdownMenu, MenuItem } from ".";

export const MenuItems = () => {
  const [open, setOpen] = useState("");

  const handleDropdownHover = (label: string) => {
    setOpen(label);
  };

  const handleDropdownLeave = () => {
    setOpen("");
  };
  return (
    <ul className={`menu menu-horizontal px-1 flex`}>
      {navItems.map((nav, i) => (
        <MenuItem
          key={i}
          label={nav.label}
          link={nav.link}
          option={nav.option}
          setOpen={setOpen}
          handleDropdownHover={handleDropdownHover}
          handleDropdownLeave={handleDropdownLeave}
        >
          {open === nav.label && nav.option && (
            <DropdownMenu
              label={nav.label}
              open={open}
              option={nav.option}
              setOpen={setOpen}
            />
          )}
        </MenuItem>
      ))}
    </ul>
  );
};
