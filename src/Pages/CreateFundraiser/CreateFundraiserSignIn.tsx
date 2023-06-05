import React from "react";
import {
  Button,
  CategoryButton,
  PageSectionTitle,
  PageTitle,
  StepLabel,
  Template,
} from "UI";

import { FundraiserCategoryData, FundraiserNationData } from "Config";
export const CreateFundraiserSignIn: React.FC = () => {
  return (
    <Template title="createFundraiserSignIn">
      <div
        className="
        w-[1000px] max-lg:w-full px-[20px] mt-[60px] max-ns:mt-[20px]
        mb-[135px] max-ns:mb-[100px] mx-auto"
      >
        <PageTitle
          title="Create your fundraiser"
          introText="We’ll get you up and running with fundraising in minutes. Let’s get started…"
          linkText="Already signed up?"
        />
        <div className="mt-[30px] ">
          <StepLabel step="Step 1" title="Category and Nation" />
        </div>

        <div className="mt-[30px]">
          <PageSectionTitle
            title="Category"
            intro="Select the category that best fits your fundraiser."
          />
          <div className="mt-[15px]">
            <div className="flex flex-wrap gap-2">
              {FundraiserCategoryData.map((item, index) => {
                return (
                  <div key={index}>
                    <CategoryButton
                      id={item.id}
                      label={item.label}
                      name={item.name}
                      value={item.value}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-[30px]">
          {/* <OriginNation /> */}
          <div>
            <PageSectionTitle
              title="Nation"
              intro="Select the nation from which your fundraiser originates."
            />
            <div className="mt-[15px]">
              <div className="flex flex-wrap gap-2">
                {FundraiserNationData.map((item, index) => {
                  return (
                    <div key={index}>
                      <CategoryButton
                        id={item.id}
                        label={item.label}
                        name={item.name}
                        value={item.value}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-[60px] max-ns:mt-[30px] flex justify-end">
            <div className="w-[250px] max-ns:w-full">
              <Button
                backgroundColor="bg-green-10"
                textColor="text-black"
                textSize="text-[16px] leading-[20px] font-semibold"
                height="h-[50px]"
                width="w-full"
                text="Continue"
              />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
