import React, { useState } from "react";
import classNames from "classnames";
import {
  Button,
  GeneralCheckBoxList,
  FileInput,
  PageSectionTitle,
  PageTitle,
  StepLabel,
} from "UI";
import { FinalTouchPageCheckboxData } from "Config";
import { FinalTouchedPagePropsType } from "types";

export const FinalTouchesPage: React.FC<FinalTouchedPagePropsType> = ({
  isCrowdFundingPage,
  stepNumber,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageTitle, setPageTitle] = useState<string>(
    isCrowdFundingPage ? "Create your fundraiser" : "Create your listings"
  );
  const [overlayImage, setOverlayImage] = useState<File | null>(null);
  const [isConfirm, setIsConfirm] = useState<string[]>([""]);
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
        <PageTitle title={pageTitle} />
        <StepLabel number={stepNumber} title="Final touches" />
        {isCrowdFundingPage && (
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
        )}
        <div
          className={classNames(
            " w-full bg-gray-200 rounded-10 p-15",
            isCrowdFundingPage ? "ns:w-[390px]" : "xs:w-[500px]"
          )}
        >
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
        {!isCrowdFundingPage && (
          <div className="xs:w-[500px] w-full">
            <PageSectionTitle title="Confirm" />
            <div className="mt-2.5">
              <GeneralCheckBoxList
                options={FinalTouchPageCheckboxData}
                selectedValues={isConfirm}
                setValues={setIsConfirm}
                textStyle="introText"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
