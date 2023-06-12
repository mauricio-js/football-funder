import React from "react";
import { ListingPage } from "UI";
import { CrowdFundListData } from "Config";

export const CrowdfundingList: React.FC = () => {
  return (
    <div>
      <ListingPage
        ListingData={CrowdFundListData}
        title="Crowdfunding"
        typeFilter={false}
      />
    </div>
  );
};
