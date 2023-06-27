import { CommonText } from "@Components/Common";
import { IHardwareData } from "@Interface/data/IHardwareData";
import Image from "next/image";

export const HardwareCard = ({ data }: { data: IHardwareData }) => {
  const { category, details, image, name } = data;
  return (
    <div className="lg:flex gap-4 border rounded-md shadow-md">
      {/* w-full flex md:block justify-center */}
      <div className="w-full flex justify-center ">
        <Image className="lg:w-full" src={image} alt={category} />
      </div>
      <div className="p-4">
        <h1 className="text-[14px] font-bold mb-4 text-center lg:text-left">
          {name}
        </h1>

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
