"use client";

import { NavFooterHidePath } from "@/Constant";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useIgnorePate = (): boolean => {
  const pathname = usePathname();
  const [ignorePath, setIgnorePath] = useState<boolean>(
    NavFooterHidePath.includes(pathname)
  );

  useEffect(() => {
    setIgnorePath(NavFooterHidePath.includes(pathname));
  }, [pathname]);

  return ignorePath;
};
