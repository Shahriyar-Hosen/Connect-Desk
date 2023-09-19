"use client";

import Link from "next/link";
import { FC } from "react";
import { RxAvatar } from "react-icons/rx";

export const Avatar: FC = () => (
  <div className="dropdown dropdown-end ">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <RxAvatar className="text-primary" size={"100%"} />
      </div>
    </label>
    <ul
      tabIndex={0}
      className="mt-3 z-999999 p-2 shadow menu dropdown-content bg-base-100 rounded-md w-32"
    >
      <li>
        <Link
          href="/dashboard"
          className="hover:bg-primary hover:text-white rounded-md"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <a className="hover:bg-primary hover:text-white rounded-md">Logout</a>
      </li>
    </ul>
  </div>
);
