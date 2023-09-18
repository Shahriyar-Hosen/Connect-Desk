"use client";

import { FC } from "react";
import { MainContainer } from "..";
import { HardwareDiv } from "./HardwareDiv";

export const HardwareContainer: FC = () => (
  <MainContainer isRemoveMargin isRemovePadding>
    <HardwareDiv title="POS Printer" />
    <HardwareDiv title="Laser Printer" />
    <HardwareDiv title="Barcode Printer" />
    <HardwareDiv title="Barcode Scanner" />
  </MainContainer>
);
