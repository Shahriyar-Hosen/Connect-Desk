"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersFourLight } from "react-icons/pi";
import { TbBrandProducthunt as TbBrandProduction } from "react-icons/tb";
import { Logo } from "..";

export interface IDashboardMenuItem {
  id: string;
  label: string;
  path: string;
  icon: JSX.Element;
}

const menuItems: IDashboardMenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <LuLayoutDashboard size={25} />,
  },
  {
    id: "products",
    label: "Products",
    path: "/dashboard/products",
    icon: <TbBrandProduction size={25} />,
  },
  {
    id: "visitors",
    label: "Visitors",
    path: "/dashboard/visitors",
    icon: <PiUsersFourLight size={25} />,
  },
];

export const Sidebar = () => {
  // const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  const [sideBarOpen, setSideBarOpen] = useState(true);
  // const {status} = useSession()

  const pathName = usePathname();
  const router = useRouter();

  const handlenavigate = (getMenuItem: IDashboardMenuItem) => {
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
        <Logo />
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 lg:mt-9 ">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <label
                    onClick={() => handlenavigate(menuItem)}
                    className={`group relative cursor-pointer flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-accent hover:bg-opacity-30 
                             ${
                               pathName.includes(menuItem.id) &&
                               "bg-accent bg-opacity-30"
                             }
                            `}
                  >
                    {menuItem.icon}
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
