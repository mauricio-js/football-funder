import React, { useState } from "react";
import {
  Button,
  CategoryButtonList,
  PageSectionTitle,
  PageTitle,
  StepLabel,
} from "UI";

import { FundraiserCategoryData, FundraiserNationData } from "Config";

interface CategoryAndNationPageProps {
  isOrganisation: boolean;
  pageTitle: string;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export const CategoryAndNationPage: React.FC<CategoryAndNationPageProps> = ({
  handleNextPage,
  handlePrevPage,
  isOrganisation,
  pageTitle,
}) => {
  const [fundraiserCategory, setFundraiserCategory] = useState<number>(
    isOrganisation ? 1 : 2
  );
  const [fundraiseNation, setFundraiserNation] = useState<number>(1);

  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-[20px]
       mb-[120px] max-ns:mb-[60px] mx-auto"
    >
      <PageTitle
        title={pageTitle}
        introText="We’ll get you up and running with fundraising in minutes. Let’s get started…"
        linkText="Already signed up?"
      />
      {/* <div className="mt-15">
        <StepperBackButton handleBackPage={handlePrevPage} />
      </div> */}
      <div className="mt-30 ">
        <StepLabel number="Step 1" title="Category and Nation" />
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
      <div className="xs:mt-[100px] mt-[60px]">
        <div className="flex xs:justify-end w-full">
          <div className="xs:w-[250px] w-full">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Continue"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
