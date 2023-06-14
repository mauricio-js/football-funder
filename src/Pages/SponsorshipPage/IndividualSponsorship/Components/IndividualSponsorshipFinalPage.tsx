import React from "react";
import { useNavigate } from "react-router-dom";
import { FinalPage } from "UI";
import { SPONSORSHIPLISTING_URL } from "Lib";

export const IndividualSponsorshipFinalPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <FinalPage viewLisingFunction={() => navigate(SPONSORSHIPLISTING_URL)} />
    </div>
  );
};
