import React from "react";
import {
  PageSectionTitle,
  PageTitle,
  ShowAmount,
  StepLabel,
  Textarea,
} from "UI";

export const CreateFundraiserStepSecond: React.FC = () => {
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[90px] max-ns:mb-30 mx-auto"
    >
      <div>
        <PageTitle title="Create your fundraiser" />
        <div className="mt-30">
          <StepLabel step="Step 2" title="Fundraiser details" />
        </div>
        <div className="mt-30">
          <PageSectionTitle
            title="Fundraiser title"
            intro="What is the title of your fundraiser?"
          />
          <div className="md:w-1/2">
            <Textarea
              title="Title"
              limit={150}
              height="h-[124px]"
              value="Vel amet iaculis id adipiscing venenatis sed volutpat.Dictumst sem pellentesque lectus sollicitudin."
            />
          </div>
          <div className="mt-30">
            <PageSectionTitle
              title="Fundraiser tagline"
              intro="Describe what your fundraiser is aiming to achieve in a sentence or two. 
              This description will sit below the fundraiser title."
            />
          </div>
          <div className="mt-[15px] md:w-1/2">
            <Textarea
              title="Short description"
              limit={300}
              height="h-[150px]"
              value="The subheader for running a fundraiser campaign for my football club goes here and there’s three lines of copy available to describe it. There’s some additional space in this box if I need it."
            />
          </div>
          <div className="mt-30">
            <PageSectionTitle
              title="Fundraiser amount"
              intro="The final amount you wish to raise, after fees are deducted."
            />
          </div>
          <div className="mt-[10px]">
            <div className="text-xs text-gray-500">
              <span>
                We take a platform fee for each donation - this pays for all
                admin and promotion of your fundraising campaign.
              </span>
              <span className="ml-1 text-green-70 underline">See fees</span>
            </div>
          </div>
          <div className="mt-[10px]">
            <ShowAmount amount="100,000" classes="md:w-1/2 h-[54px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
