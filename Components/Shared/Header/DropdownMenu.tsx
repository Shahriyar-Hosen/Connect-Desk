"use client";

import { IDropdownMenu } from "@Interface";
import { MenuItem } from "./MenuItem";

export const DropdownMenu = ({
  label,
  open,
  option,
  setOpen,
}: IDropdownMenu) => (
  <ul
    tabIndex={0}
    className={`menu menu-compact ${
      label === open && "dropdown-content"
    }  -mt-[10px] lg:mt-0 p-2 shadow-2xl shadow-gray-500  bg-white absolute z-[100] rounded-md w-52`}
  >
    {option &&
      option.map(({ label, link }, i) => (
        <MenuItem
          handleDropdownHover={() => {}}
          key={i}
          label={label}
          link={link}
          setOpen={setOpen}
          open={open || ""}
        />
      ))}
  </ul>
);
