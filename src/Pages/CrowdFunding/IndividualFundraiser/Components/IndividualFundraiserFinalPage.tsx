import React from "react";
import { useNavigate } from "react-router-dom";
import { FinalPage } from "UI";
import { CROWDFUNDINGLIST_URL } from "Lib";

export const IndividualFundraiserFinalPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <FinalPage viewLisingFunction={() => navigate(CROWDFUNDINGLIST_URL)} />
    </div>
  );
};
