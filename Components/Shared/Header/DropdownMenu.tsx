"use client";

import { IDropdownMenu } from "@Interface";
import { MenuItem } from "./MenuItem";

export const DropdownMenu = ({ option, setOpen }: IDropdownMenu) => (
  <ul
    tabIndex={0}
    className="menu menu-compact dropdown-content -mt-[40px] lg:mt-5 p-2 shadow-2xl shadow-gray-500  bg-white absolute z-[100] rounded-md w-52"
  >
    {option &&
      option.map(({ label, link }, i) => (
        <MenuItem key={i} label={label} link={link} setOpen={setOpen} />
      ))}
  </ul>
);
