import React from "react";
import { PageSectionTitle, PageTitle, StepLabel } from "UI";

export const CreateFundraiserStepThird: React.FC = () => {
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-[20px] mt-[60px] max-ns:mt-[20px]
        mb-[135px] max-ns:mb-[100px] mx-auto"
    >
      <PageTitle title="Create your fundraiser" />
      <div className="mt-[30px]">
        <StepLabel step="Step 3" title="Add Details" />
      </div>
      <div className="mt-[30px]">
        <PageSectionTitle
          title="About the fundraiser"
          intro="Give a detailed description of your fundraiser."
        />
      </div>
    </div>
  );
};
