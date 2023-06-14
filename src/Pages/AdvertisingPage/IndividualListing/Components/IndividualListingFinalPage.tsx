import React from "react";
import { useNavigate } from "react-router-dom";
import { FinalPage } from "UI";
import { ADSLISTING_URL } from "Lib";

export const IndividualListingFinalPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <FinalPage viewLisingFunction={() => navigate(ADSLISTING_URL)} />
    </div>
  );
};
