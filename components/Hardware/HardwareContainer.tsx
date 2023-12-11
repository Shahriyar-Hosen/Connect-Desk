"use client";

import { FC } from "react";
import { MainContainer } from "..";
import { HardwareDiv } from "./HardwareDiv";
import { IIntlTranslator } from "@/Interface";

export const HardwareContainer: FC<IIntlTranslator> = ({ t }) => (
  <MainContainer isRemoveMargin isRemovePadding>
    <HardwareDiv title="POSPrinter" t={t} />
    <HardwareDiv title="LaserPrinter" t={t} />
    <HardwareDiv title="BarcodePrinter" t={t} />
    <HardwareDiv title="BarcodeScanner" t={t} />
  </MainContainer>
);
