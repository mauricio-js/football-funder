import React from "react";
import { ListingPage } from "UI";
import { SponsorshipListData } from "Config";

export const SponsorshipList: React.FC = () => {
  return (
    <div>
      <ListingPage
        ListingData={SponsorshipListData}
        title="Sponsorship"
        typeFilter={false}
      />
    </div>
  );
};
