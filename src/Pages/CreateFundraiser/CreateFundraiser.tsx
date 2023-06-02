import React from "react";
import { CategoryButton, CategoryTag, StepLabel, TextButton } from "UI";
export const CreateFundraiser: React.FC = () => {
  return (
    <div className="w-[1000px] mx-auto">
      <div className="mt-[60px] flex flex-col gap-[10px]">
        <div className="titleText">Create your fundraiser</div>
        <div className=" flex justify-between">
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
          <div className="flex flex-wrap gap-[10px]">
            <CategoryButton label="Club" />
          </div>
        </div>
      </div>
    </div>
  );
};
