"use client";

import { FC } from "react";
import { MainContainer } from "..";
import { HardwareDiv } from "./HardwareDiv";
import { IIntlLang, IIntlTranslator } from "@/Interface";

export const HardwareContainer: FC<IIntlLang> = ({ lng }) => (
  <MainContainer isRemoveMargin isRemovePadding>
    <HardwareDiv title="POSPrinter" lng={lng} />
    <HardwareDiv title="LaserPrinter" lng={lng} />
    <HardwareDiv title="BarcodePrinter" lng={lng} />
    <HardwareDiv title="BarcodeScanner" lng={lng} />
  </MainContainer>
);
