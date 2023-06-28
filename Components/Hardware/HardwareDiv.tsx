import { ComponentHeader } from "@Components/Common";
import { hardwareData } from "@public/Data/hardwareData";
import { HardwareCard } from "./HardwareCard";

export const HardwareDiv = ({ title }: { title: string }) => {
  return (
    <div className="my-16">
      <ComponentHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[90%] lg:max-w-[1020px] mx-auto mt-[30px] md:mt-[70px]">
        {hardwareData.map((data, i) => (
          <div key={i} className={`${data.category !== title && "hidden"}`}>
            {data.category === title ? <HardwareCard data={data} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};
