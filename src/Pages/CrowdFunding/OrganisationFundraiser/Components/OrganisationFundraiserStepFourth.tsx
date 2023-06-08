import React, { useState } from "react";
import { AddAwardPanel, PageSectionTitle, PageTitle, StepLabel } from "UI";

export const OrganisationFundraiserStepFourth: React.FC = () => {
  const [addReward, setAddReward] = useState<boolean>(false);
  // console.log("addReward", addReward);
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[280px] max-ns:mb-30 mx-auto"
    >
      <PageTitle title="Create your fundraiser" />
      <div className="mt-30">
        <StepLabel step="Step 4" title="Add rewards" />
      </div>
      <div className="mt-30">
        <PageSectionTitle intro="Give your supporters something back by offering rewards for a certain donation amount. The number of rewards you can offer is unlimited." />
      </div>
      <div className="mt-30">
        <AddAwardPanel handleClick={setAddReward} reward={addReward} />
      </div>
    </div>
  );
};
