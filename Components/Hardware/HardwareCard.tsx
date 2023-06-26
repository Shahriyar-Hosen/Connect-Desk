import { CommonText } from "@Components/Common";
import { IHardwareData } from "@Interface/data/IHardwareData";
import Image from "next/image";

export const HardwareCard = ({ data }: { data: IHardwareData }) => {
  const { category, details, image, name } = data;
  return (
    <div className="flex gap-4 border rounded-md shadow-md">
      <Image src={image} alt={category} />
      <div className="p-4">
        <h1 className="text-[14px] font-bold mb-4">{name}</h1>

        {details.map((p, index) => (
          <ul key={index}>
            <li className="text-sm flex gap-2">
              {"\u2B24"} <CommonText text="lg">{p}</CommonText>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
