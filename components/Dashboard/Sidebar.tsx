"use client";

import { IDashboardSidebarItem } from "@/Interface";
import { dashboardSidebarItem } from "@/public/Data";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "..";

export const Sidebar = () => {
  // const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  const [sideBarOpen, setSideBarOpen] = useState(true);
  // const {status} = useSession()

  const pathName = usePathname();
  const router = useRouter();

  const handlenavigate = (getMenuItem: IDashboardSidebarItem) => {
    // if (status === "unauthenticated") {
    //   router.push("/unauth-page");
    //   return;
    // }
    router.push(getMenuItem.path);
  };

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-[13.125rem] flex-col overflow-y-hidden bg-[#ddffeb] duration-300 ease-linear lg:static lg:translate-x-0
    ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="flex items-center justify-between gap-2 px-6 pt-2 lg:pt-3">
        <Logo lng="en" />
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 lg:mt-9 ">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {dashboardSidebarItem.map((menuItem) => (
                <li key={menuItem.id}>
                  <label
                    onClick={() => handlenavigate(menuItem)}
                    className={`group relative cursor-pointer flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-accent hover:bg-opacity-30 
                             ${
                               (pathName.split("/").length <= 2
                                 ? pathName.split("/")[1] === menuItem.id
                                 : pathName.split("/")[2] === menuItem.id) &&
                               "bg-accent bg-opacity-30"
                             }
                            `}
                  >
                    {menuItem.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};
