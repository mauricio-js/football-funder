import React from "react";
import {
  Button,
  CategoryButtonList,
  PageSectionTitle,
  PageTitle,
  StepLabel,
} from "UI";

import { FundraiserCategoryData, FundraiserNationData } from "Config";
import { StepperActionPropsType } from "types";

export const AdvertisingSignUpFirstStep: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-[20px]
       mb-[120px] max-ns:mb-[60px] mx-auto"
    >
      <PageTitle
        title="Create your listing"
        introText="We’ll get you up and running with fundraising in minutes. Let’s get started…"
        linkText="Already signed up?"
      />
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
            name="advertiser_category"
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
            name="advertiser_nation"
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
