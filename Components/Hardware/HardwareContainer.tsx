import { MainContainer } from "@Components/Common";
import { hardwareData } from "@public/Data/hardwareData";

export const HardwareContainer = () => {
  return (
    <MainContainer>
      {hardwareData.map((data) => (
        <>
          {data.category === "POS Printer" ? <div>{/* <HaderTi */}</div> : null}
        </>
      ))}
    </MainContainer>
  );
};
