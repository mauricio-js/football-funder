import React from "react";
import { CrowdFundDetails } from "Pages";

export const CrowdFundDetailsLivePage: React.FC = () => {
  return (
    <div>
      <CrowdFundDetails pending={false} />
    </div>
  );
};
