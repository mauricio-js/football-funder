import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  ContactOrganisationData,
  ContactAddressLine1Data,
  ContactAddressLine2Data,
  ContactPostcodeData,
  ContactTownData,
  RegionData,
} from "Config";
import {
  Button,
  Input,
  PageSectionTitle,
  Select,
  StepperBackButton,
  UnchangePageTitle,
} from "UI";
import { SIGNIN_URL } from "Lib/urls";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";

interface SignUpSecondPagePropsType {
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export const SignUpStepSecond: React.FC<SignUpSecondPagePropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const navigate = useNavigate();
  const { showStatus } = useContext(StatusContext);
  const { formValues } = useContext(FormStepperContext)!;

  const goToSignIn = () => {
    navigate(SIGNIN_URL);
  };

  const signUpSecondPageAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValues.org_country) {
      handleNextPage();
    } else {
      showStatus("You must select the country", "error");
    }
  };

  return (
    <form onSubmit={signUpSecondPageAction}>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 xs:mt-[60px] mt-5
       xs:mb-[150px] mb-[100px] mx-auto"
      >
        <div className="mt-6">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-15">
          <UnchangePageTitle
            title="Create your Football Funder account"
            introText="Already have an account?"
            linkText="Sign in"
            linkFunction={goToSignIn}
          />
        </div>
        <div className="mt-30">
          <PageSectionTitle
            title="Organisation details"
            intro="Please provide the details of the organisation that you are listing advertising opportunities for."
          />
        </div>
        <div className="mt-30 xs:w-[500px] w-full">
          <Input data={ContactOrganisationData} name="org_name" />
          <div className="mt-2.5 smallIntroText">
            Use official name - if individual, use full name.
          </div>
          <div className="mt-30 flex flex-col gap-2.5">
            <div className="flex gap-2.5">
              <div className="w-1/2">
                <Input data={ContactAddressLine1Data} name="org_address1" />
              </div>
              <div className="w-1/2">
                <Input data={ContactAddressLine2Data} name="org_address2" />
              </div>
            </div>
            <div className="flex gap-2.5">
              <div className="w-1/2">
                <Input data={ContactTownData} name="org_city" />
              </div>
              <div className="w-1/2">
                <Input data={ContactPostcodeData} name="org_post_code" />
              </div>
            </div>
          </div>
          <div className="mt-2.5 smallIntroText">
            City or town that your organisation is based.
          </div>
          <div className="mt-5">
            <Select
              backgroundColor="bg-white"
              name="org_country"
              label="Country (Region)"
              SelectFormData={RegionData}
              textSize="generalText"
            />
          </div>
          <div className="mt-2.5 smallIntroText">
            Country that your organisation is based.
          </div>
        </div>
        <div className="xs:mt-[60px] mt-30">
          <div className="flex xs:justify-end max-xs:flex-col">
            <div className="xs:w-[250px]">
              <Button
                type="submit"
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Continue"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
