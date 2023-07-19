import React, { useContext } from "react";
import classNames from "classnames";
import {
  Button,
  GeneralCheckBoxList,
  PageSectionTitle,
  PageTitle,
  StepperBackButton,
  StepLabel,
} from "UI";
import { FinalTouchPageCheckboxData } from "Config";
import { StepperActionPropsType } from "types";
import { FormStepperContext } from "App/FormStepperProvider";
import { StatusContext } from "App/StatusProvider";

export const CreateSponsorshipListingThirdStep: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  const { selectedCheckbox, isClickedPromoteBtn, handleClickPromoteBtn } =
    useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);

  const handleSubmit = () => {
    if (
      selectedCheckbox.sponsorhip_final_touch_checkbox?.length &&
      selectedCheckbox.sponsorhip_final_touch_checkbox.length === 3
    ) {
      handleNextPage();
    } else showStatus("You must confirm", "error");
  };

  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[100px] max-ns:mb-[60px] mx-auto"
    >
      <div className="">
        <PageTitle title="Create your listings" />
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 6" title="Final touches" />
        </div>

        <div
          className={classNames(
            "mt-30 w-full bg-gray-200 rounded-10 p-15",
            "xs:w-[500px]"
          )}
        >
          <div className="mt-30 text-[16px] leading-[20px]">
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
              backgroundColor={
                isClickedPromoteBtn ? "bg-green-70" : "bg-green-10"
              }
              height="h-[50px]"
              width="w-full"
              text="Promote"
              textColor={isClickedPromoteBtn ? "text-white" : "text-green-70"}
              textSize="text-[16px] leading-[20px] font-semibold"
              handleClick={handleClickPromoteBtn}
            />
          </div>
        </div>
        <div className="mt-30 xs:w-[500px] w-full">
          <PageSectionTitle title="Confirm" />
          <div className="mt-2.5">
            <GeneralCheckBoxList
              options={FinalTouchPageCheckboxData}
              textStyle="introText"
              name="sponsorhip_final_touch_checkbox"
            />
          </div>
        </div>
      </div>
      <div className="xs:mt-[100px] mt-[60px]">
        <div className="flex xs:justify-end">
          <div className="xs:w-[250px] w-full">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Post listing"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
