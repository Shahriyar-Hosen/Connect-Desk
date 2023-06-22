import { CommonText } from "@Components/Common";
import { contactData } from "@public/Data/contactUsPage";
import Image from "next/image";

export const ContactDetails = () => {
  return (
    <div className="w-full max-w-[520px]">
      {contactData.map((data) => (
        <div key={data.title} className="my-4 flex gap-3 items-center">
          <Image src={data.icon} alt={data.title} />
          <div>
            <h3 className="text-sm font-semibold">{data.title}</h3>
            {data.details.map((p) => (
              <div key={p}>
                <CommonText>{p}</CommonText>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
