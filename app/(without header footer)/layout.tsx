import { IChildren } from "@/Interface";
import { FC } from "react";

const WithoutHeaderFooterLayout: FC<IChildren> = ({ children }) => (
  <main>{children}</main>
);

export default WithoutHeaderFooterLayout;
