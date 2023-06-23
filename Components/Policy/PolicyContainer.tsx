import { CommonText } from "@Components/Common";
import { IPrivatePolicyData } from "@Interface/data/policyPage";

export const PolicyContainer = ({
  data,
  textPosition = "center",
}: {
  data: IPrivatePolicyData;
  textPosition?: "center" | "left" | "right";
}) => {
  const { details, title } = data;
  return (
    <div className="mb-6">
      <h3
        className={`${
          (textPosition === "center" && "text-center") ||
          (textPosition === "left" && "text-left") ||
          (textPosition === "right" && "text-right")
        } text-lg md:text-[24px] font-bold mb-4`}
      >
        {title}
      </h3>
      {details.map((p) => (
        <div key={p} className="mb-3">
          <CommonText>{p}</CommonText>
        </div>
      ))}
    </div>
  );
};
