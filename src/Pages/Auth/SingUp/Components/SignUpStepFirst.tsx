import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  PageSectionTitle,
  UnchangePageTitle,
  CategoryButtonList,
  Template,
} from "UI";
import { FundraiserCategoryData } from "Config";
import { SIGNIN_URL } from "Lib";

interface SignUpFirstPagePropsType {
  handleNextPage: () => void;
  // handlePrevPage: () => void;
  setCategoryId: (categoryId: number) => void;
  categoryId: number;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const SignUpStepFirst: React.FC<SignUpFirstPagePropsType> = ({
  handleNextPage,
  setCategoryId,
  categoryId,
  isLoading,
  setIsLoading,
}) => {
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate(SIGNIN_URL);
  };
  const signUpFirstPageAction = () => {
    if (categoryId) {
      handleNextPage();
    } else {
      console.log("You must select the category");
    }
  };
  return (
    <Template isLoading={isLoading}>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 xs:mt-[60px] mt-5
       xs:mb-[150px] mb-[100px] mx-auto"
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
              currentValue={categoryId}
              onSelect={setCategoryId}
            />
          </div>
        </div>
        <div className="xs:mt-[60px] mt-30">
          <div className="flex xs:justify-end max-xs:flex-col">
            <div className="xs:w-[250px]">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Continue"
                textColor="text-green-70"
                textSize="buttonText"
                handleClick={signUpFirstPageAction}
              />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
