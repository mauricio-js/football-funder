import React, { useState } from "react";
import { CategoryButtonList, PageSectionTitle, PageTitle, StepLabel } from "UI";

import { FundraiserCategoryData, FundraiserNationData } from "Config";
export const OrganisationFundraiserSignInStepFirst: React.FC = () => {
  const [fundraiserCategory, setFundraiserCategory] = useState<string>("club");
  const [fundraiseNation, setFundraiserNation] = useState<string>("england");
  // console.log(
  //   "fundraiserCategory, fundraiserNation",
  //   fundraiserCategory,
  //   fundraiseNation
  // );
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-[20px]
       mb-[60px] max-ns:mb-30 mx-auto"
    >
      <PageTitle
        title="Create your fundraiser"
        introText="We’ll get you up and running with fundraising in minutes. Let’s get started…"
        linkText="Already signed up?"
      />
      <div className="mt-30 ">
        <StepLabel step="Step 1" title="Category and Nation" />
      </div>

      <div className="mt-30">
        <PageSectionTitle
          title="Category"
          intro="Select the category that best fits your fundraiser."
        />
        <div className="mt-[15px]">
          <CategoryButtonList
            options={FundraiserCategoryData}
            currentValue={fundraiserCategory}
            onSelect={setFundraiserCategory}
          />
        </div>
      </div>
      <div className="mt-30">
        <PageSectionTitle
          title="Nation"
          intro="Select the nation from which your fundraiser originates."
        />
        <div className="mt-[15px]">
          <CategoryButtonList
            options={FundraiserNationData}
            currentValue={fundraiseNation}
            onSelect={setFundraiserNation}
          />
        </div>
      </div>
    </div>
  );
};
