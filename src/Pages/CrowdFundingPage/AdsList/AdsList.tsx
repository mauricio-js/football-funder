import React from "react";
import { ListingPage } from "UI";
import { AdsListData } from "Config";

export const AdsList: React.FC = () => {
  return (
    <div>
      <ListingPage
        ListingData={AdsListData}
        title="Advertising"
        typeFilter={false}
      />
    </div>
  );
};
