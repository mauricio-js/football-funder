import React from "react";
import { Button, CategoryButton, CategoryTag, StepLabel, TextButton } from "UI";
import { FundraiserCategoryData, FundraiserNationData } from "Config";
export const CreateFundraiser: React.FC = () => {
  return (
    <div className="w-[1000px] max-lg:w-full px-[20px] mx-auto">
      <div className="mt-[60px] flex flex-col gap-[10px]">
        <div className="titleText">Create your fundraiser</div>
        <div className=" flex justify-between max-md:flex-col">
          <div className="introText">
            We’ll get you up and running with fundraising in minutes. Let’s get
            started…
          </div>
          <div className="flex gap-1">
            <div className="introText">Already signed up?</div>
            <TextButton text="Log in here." />
          </div>
        </div>
      </div>
      <div className="mt-[30px] ">
        <StepLabel step="Step 1" title="Category and Nation" />
      </div>
      <div className="mt-[30px]">
        <CategoryTag
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
        <div className="mt-[30px]">
          <CategoryTag
            title="Nation"
            intro="Select the nation from which your fundraiser originates."
          />
        </div>
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
        <div className="mt-[60px] flex justify-end">
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
  );
};
