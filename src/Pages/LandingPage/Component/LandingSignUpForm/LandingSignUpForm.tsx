import React, { useContext } from "react";
import { SignUpButton } from "Pages";
import { Select, Input } from "UI";
import {
  FirstNameData,
  LastNameData,
  ContactOrganisationData,
  AccountEmailData,
  PhoneNumberData,
  SignUpSelectFormData,
  WebSiteData,
} from "Config";
import { FormStepperContext } from "App/FormStepperProvider";

export const LandingSignUpForm: React.FC = () => {
  const { formValues } = useContext(FormStepperContext)!;

  return (
    <form>
      <div className="mt-[18px]">
        <div className="text-base font-normal text-center text-green-10">
          Sign up for early access
        </div>
        <div
          className="
                mt-[15px] mx-auto
                w-[390px] md:w-[527px] max-ns:w-full max-ns:px-5
              "
        >
          <Select
            backgroundColor="bg-white"
            name="category"
            label="Select your category"
            SelectFormData={SignUpSelectFormData}
            textSize="generalText"
          />

          <div className="mt-30 ">
            {formValues.category === "organisation" && (
              <div>
                <div className="text-white text-sm text-center">
                  Please fill the requested information below
                </div>
                <div className="mt-[15px]">
                  <div className="flex flex-col gap-y-[10px]">
                    <Input
                      data={FirstNameData}
                      name="first_name"
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={LastNameData}
                      name="last_name"
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={ContactOrganisationData}
                      name="organisation"
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={AccountEmailData}
                      name="email"
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={PhoneNumberData}
                      name="phone_number"
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={WebSiteData}
                      name="website_url"
                      required={true}
                      disabled={false}
                    />
                  </div>

                  <div className="mt-30">
                    <SignUpButton />
                  </div>
                </div>
              </div>
            )}
            {formValues.category === "individual" && (
              <div>
                <div className="text-white text-sm text-center">
                  Please fill the requested information below
                </div>
                <div className="mt-[15px]">
                  <div className="flex flex-col gap-y-[10px]">
                    <Input
                      data={FirstNameData}
                      name="first_name"
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={LastNameData}
                      name="last_name"
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={AccountEmailData}
                      name="email"
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={PhoneNumberData}
                      name="phone_number"
                      required={true}
                      disabled={false}
                    />
                  </div>

                  <div className="mt-30">
                    <SignUpButton />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
