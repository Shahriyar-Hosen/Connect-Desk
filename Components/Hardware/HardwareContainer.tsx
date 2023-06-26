import { ComponentHeader, MainContainer } from "@Components/Common";
import { hardwareData } from "@public/Data/hardwareData";
import { HardwareCard } from "./HardwareCard";

export const HardwareContainer = () => {
  return (
    <MainContainer>
      <ComponentHeader title="POS Printer" />
      <br /> <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[90%] lg:max-w-[1020px] mx-auto">
        {hardwareData.map((data, i) => (
          <div key={i}>
            {data.category === "POS Printer" ? (
              <HardwareCard data={data} />
            ) : null}
          </div>
        ))}
      </div>
    </MainContainer>
  );
};
