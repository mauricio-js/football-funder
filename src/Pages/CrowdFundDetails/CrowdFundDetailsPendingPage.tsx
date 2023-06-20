import React from "react";
import { CrowdFundDetails } from "Pages";

export const CrowdFundDetailsPendingPage: React.FC = () => {
  return (
    <div>
      <CrowdFundDetails pending={true} />
    </div>
  );
};
