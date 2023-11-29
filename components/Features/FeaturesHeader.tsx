import { FC } from "react";
import { ComponentHeader, ConnectDesk } from "..";
import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n";

export const FeaturesHeader: FC = async () => {
  // const { t } = await useTranslation(lng, "features");

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
