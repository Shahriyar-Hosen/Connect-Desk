import PageHeader from "@Components/PageHeader";
import React from "react";

const Features = () => {
  return (
    <div>
      <PageHeader
        pageName="Feature"
        mainTitle="Take A Look At Our Awesome"
        subTitle={<span className="text-primary">Features</span>}
      />
    </div>
  );
};

export default Features;
