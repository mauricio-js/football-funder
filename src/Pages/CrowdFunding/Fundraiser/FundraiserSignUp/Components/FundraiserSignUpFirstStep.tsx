import React, { useContext } from "react";
import {
  Button,
  CategoryButtonList,
  PageSectionTitle,
  PageTitle,
  StepLabel,
} from "UI";
import { FundraiserCategoryData, FundraiserNationData } from "Config";
import { FormStepperContext } from "App/FormStepperProvider";

interface CrowdfudingPage1PropsType {
  handleNextPage: () => void;
}

export const FundraiserSignUpFirstStep: React.FC<CrowdfudingPage1PropsType> = ({
  handleNextPage,
}) => {
  const { fundraierRegisterValue, handleFundraiserRegisterValue } =
    useContext(FormStepperContext);
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-[20px]
       mb-[120px] max-ns:mb-[60px] mx-auto"
    >
      <PageTitle
        title="Create your fundraiser"
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
            name="category_id"
            options={FundraiserCategoryData}
            value={fundraierRegisterValue.category_id}
            setValue={handleFundraiserRegisterValue}
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
            name="nation"
            options={FundraiserNationData}
            value={fundraierRegisterValue.nation}
            setValue={handleFundraiserRegisterValue}
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
