"use client";

import { IIntlParams } from "@/Interface";
import { ComingSoon } from "@/components";
import { FC } from "react";

const InventorySoftware: FC<IIntlParams> = ({ params: { lng } }) => (
  <ComingSoon lng={lng} />
);

export default InventorySoftware;
