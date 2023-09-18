"use client";

import { navItems } from "@/public/Data";
import { FC, useState } from "react";
import { DropdownMenu, MenuItem } from ".";

export const MenuItems: FC = () => {
  const [open, setOpen] = useState("");
  const handleDropdownHover = (label: string) => {
    setOpen(label);
  };

  const handleDropdownLeave = () => {
    setOpen("");
  };

  return (
    <ul className={`px-1 flex`}>
      {navItems.map((nav, i) => (
        <MenuItem
          key={i}
          label={nav.label}
          link={nav.link}
          option={nav.option}
          setOpen={setOpen}
          open={open}
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
