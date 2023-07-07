import React from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
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
  Template,
} from "UI";
import { SIGNIN_URL } from "Lib";

interface SignUpSecondPagePropsType {
  handleNextPage: () => void;
  handlePrevPage: () => void;
  country: string;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  formValues: { [key: string]: string };
  onInputChange: (name: string, value: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const SignUpStepSecond: React.FC<SignUpSecondPagePropsType> = ({
  handleSelectChange,
  country,
  handleNextPage,
  handlePrevPage,
  formValues,
  onInputChange,
  isLoading,
  setIsLoading,
}) => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate(SIGNIN_URL);
  };

  const signUpSecondPageAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (country) {
      handleNextPage();
    } else {
      toast.error("You must select the country", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Template isLoading={isLoading}>
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
            <Input
              data={ContactOrganisationData}
              name="organization"
              onChange={onInputChange}
              value={formValues.organization || ""}
            />
            <div className="mt-2.5 smallIntroText">
              Use official name - if individual, use full name.
            </div>
            <div className="mt-30 flex flex-col gap-2.5">
              <div className="flex gap-2.5">
                <div className="w-1/2">
                  <Input
                    data={ContactAddressLine1Data}
                    name="address_line1"
                    onChange={onInputChange}
                    value={formValues.address_line1 || ""}
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    data={ContactAddressLine2Data}
                    name="address_line2"
                    onChange={onInputChange}
                    value={formValues.address_line2 || ""}
                  />
                </div>
              </div>
              <div className="flex gap-2.5">
                <div className="w-1/2">
                  <Input
                    data={ContactTownData}
                    name="city"
                    onChange={onInputChange}
                    value={formValues.city || ""}
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    data={ContactPostcodeData}
                    name="postcode"
                    onChange={onInputChange}
                    value={formValues.postcode || ""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2.5 smallIntroText">
              City or town that your organisation is based.
            </div>
            <div className="mt-5">
              <Select
                backgroundColor="bg-white"
                border="border-[1px] border-gray-300"
                onOptionChange={handleSelectChange}
                placeholder="text-gray-500"
                placeholderText="Country (Region)"
                SelectFormData={RegionData}
                selectedOption={country}
                textColor="text-green-70"
                textSize="generalText"
              />
              <ToastContainer />
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
    </Template>
  );
};
