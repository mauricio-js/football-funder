import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageSectionTitle, UnchangePageTitle, CategoryButtonList } from "UI";
import { FundraiserCategoryData } from "Config";
import { SIGNIN_URL } from "Lib";

export const SignUpStepFirst: React.FC = () => {
  const navigate = useNavigate();
  const [fundraiserCategory, setFundraiserCategory] = useState<string>("club");
  const goToSignIn = () => {
    navigate(SIGNIN_URL);
  };
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 ns:mt-[60px] mt-[90px]
       sm:mb-[100px] mb-30 mx-auto"
    >
      <UnchangePageTitle
        title="Create your Football Funder account"
        introText="Already have an account?"
        linkText="Sign in"
        linkFunction={goToSignIn}
      />
      <div className="mt-30">
        <PageSectionTitle
          title="Category"
          intro="Select the option below which reflects your organisation."
        />
        <div className="mt-[15px]">
          <CategoryButtonList
            options={FundraiserCategoryData}
            currentValue={fundraiserCategory}
            onSelect={setFundraiserCategory}
          />
        </div>
      </div>
    </div>
  );
};
