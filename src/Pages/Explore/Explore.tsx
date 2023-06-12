import React from "react";
import { ExploreCardData } from "Config";
import { ListingPage } from "UI";

export const Explore: React.FC = () => {
  return (
    <div>
      <ListingPage
        ListingData={ExploreCardData}
        title="Explore"
        typeFilter={true}
      />
    </div>
  );
};
