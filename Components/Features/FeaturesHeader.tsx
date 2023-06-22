import { ComponentHeader, ConnectDesk } from "@Components/Common";

export const FeaturesHeader = () => {
  return (
    <div className="mt-12">
      <ComponentHeader
        title="Check Out All The Important Features Of"
        subTitle={
          <span>
            <ConnectDesk text="lg" /> Software
          </span>
        }
      />
    </div>
  );
};
