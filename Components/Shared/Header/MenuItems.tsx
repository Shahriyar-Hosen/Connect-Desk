"use client";

import { navItems } from "@public/Data/common";
import { useState } from "react";
import { DropdownMenu, MenuItem } from ".";

export const MenuItems = () => {
  const [open, setOpen] = useState("");
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleDropdownHover = (label: string) => {
    setOpen(label);
    setIsHover(true);
  };

  const handleDropdownLeave = () => {
    setOpen("");
    setIsHover(false);
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
