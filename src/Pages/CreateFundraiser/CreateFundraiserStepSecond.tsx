import React from "react";
import { PageSectionTitle, PageTitle, StepLabel, Textarea } from "UI";
import { BiPound } from "react-icons/bi";

export const CreateFundraiserStepSecond: React.FC = () => {
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-[20px] mt-[60px] max-ns:mt-[20px]
        mb-[135px] max-ns:mb-[100px] mx-auto"
    >
      <div>
        <PageTitle title="Create your fundraiser" />
        <div className="mt-[30px]">
          <StepLabel step="Step 1" title="Fundraiser details" />
        </div>
        <div className="mt-[30px]">
          <PageSectionTitle
            title="Fundraiser title"
            intro="What is the title of your fundraiser?"
          />
          <div className="md:w-1/2">
            <Textarea
              title="Title"
              limit={150}
              height="h-[124px]"
              value="Vel amet iaculis id adipiscing venenatis sed volutpat. 
              Dictumst sem pellentesque lectus sollicitudin."
            />
          </div>
          <div className="mt-[30px]">
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
              value="The subheader for running a fundraiser campaign for my football club goes here 
              and there’s three lines of copy available to describe it. There’s some additional space 
              in this box if I need it."
            />
          </div>
          <div className="mt-[30px]">
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
              <span className="ml-1 underline">See fees</span>
            </div>
          </div>
          <div className="mt-[10px] md:w-1/2">
            <div className="h-[54px] p-[15px] bg-gray-50 border border-1 rounded-10">
              <div className="flex items-center">
                <div className="text-green-1 text-green-10">
                  <BiPound />
                </div>
                <div>100,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
