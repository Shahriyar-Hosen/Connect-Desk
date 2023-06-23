import { CommonText } from "@Components/Common";
import { IPrivatePolicyData } from "@Interface/data/policyPage";

export const PolicyContainer = ({ data }: { data: IPrivatePolicyData }) => {
  const { details, title } = data;
  return (
    <div className="mb-6">
      <h3 className="text-center text-lg font-bold mb-4">{title}</h3>
      {details.map((p) => (
        <div key={p} className="mb-3">
          <CommonText>{p}</CommonText>
        </div>
      ))}
    </div>
  );
};
