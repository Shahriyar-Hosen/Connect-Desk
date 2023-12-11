import { hardwareData } from "@/public/Data/hardwareData";
import { ComponentHeader } from "..";
import { HardwareCard } from "./HardwareCard";
import { IIntlTranslator } from "@/Interface";

export const HardwareDiv = ({
  title,
  t,
}: {
  title: string;
  t: IIntlTranslator;
}) => (
  <div className="my-16">
    <ComponentHeader title={t(title, { ns: "hardware" })} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[90%] lg:max-w-[1020px] mx-auto mt-[30px] md:mt-[70px]">
      {hardwareData.map((hardware, i) => (
        <div key={i} className={`${hardware.category !== title && "hidden"}`}>
          {hardware.category === title ? (
            <HardwareCard {...hardware} t={t} />
          ) : null}
        </div>
      ))}
    </div>
  </div>
);
