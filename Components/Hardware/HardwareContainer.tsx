import { ComponentHeader, MainContainer } from "@Components/Common";
import { hardwareData } from "@public/Data/hardwareData";
import { HardwareCard } from "./HardwareCard";
import { HardwareDiv } from "./HardwareDiv";

export const HardwareContainer = () => {
  return (
    <MainContainer isRemoveMargin isRemovePadding>
      <HardwareDiv title="POS Printer" />
      <HardwareDiv title="Laser Printer" />
      <HardwareDiv title="Barcode Printer" />
      <HardwareDiv title="Barcode Scanner" />
    </MainContainer>
  );
};
