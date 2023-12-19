import { useTranslation } from "@/app/i18n/client";
import { hardwareData } from "@/public/Data/hardwareData";
import { FC } from "react";
import { ComponentHeader } from "..";
import { HardwareCard } from "./HardwareCard";

interface IHardwareDiv {
  title: string;
  lng: string;
}

export const HardwareDiv: FC<IHardwareDiv> = ({ lng, title }) => {
  const { t } = useTranslation(lng, "hardware");

  return (
    <div className="my-16">
      <ComponentHeader title={<span>{t(title, { ns: "hardware" })}</span>} />
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
};
