"use client";

import { FC } from "react";
import { ComponentHeader, ConnectDesk } from "..";

export const FeaturesHeader: FC = () => (
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
