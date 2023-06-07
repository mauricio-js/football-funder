import React, { useState } from "react";
import { Button, FileInput, PageSectionTitle, PageTitle, StepLabel } from "UI";

export const CreateFundraiserStepSeventh: React.FC = () => {
  const [overlayImage, setOverlayImage] = useState<File | null>(null);
  const removeOverlayImage = () => {
    setOverlayImage(null);
  };
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[100px] max-ns:mb-30 mx-auto"
    >
      <div className="flex flex-col gap-30">
        <PageTitle title="Create your fundraiser" />
        <StepLabel step="Step 7" title="Final touches" />
        <div>
          <PageSectionTitle
            title="Video overlay image (optional)"
            intro="Choose an image to represent your video before it plays. 695x460px recommended resolution."
          />
          <div className="mt-15 ns:w-[390px] w-full ">
            <FileInput
              onChange={setOverlayImage}
              selectedImage={overlayImage}
              removeImage={removeOverlayImage}
            />
          </div>
        </div>
        <div className="ns:w-[390px] w-full bg-gray-200 rounded-10 p-15">
          <div className="text-[16px] leading-[20px]">
            Promote Your Fundraiser
          </div>
          <div className="mt-[10px]">
            <div className="generalSmallText text-gray-600">
              Be featured on the homepage, within your category and on Football
              Funder social channels for the duration of the fundraiser.
            </div>
            <div className="mt-5">
              <span className="text-[16px] font-semibold text-green-70">
                £49
              </span>{" "}
              <span className="generalSmallText text-gray-600">
                one time fee, deducted from the final amount raised.
              </span>
            </div>
          </div>
          <div className="mt-15">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Promote"
              textColor="text-green-70"
              textSize="text-[16px] leading-[20px] font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
