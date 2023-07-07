import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CheckBox,
  DropdownInput,
  Input,
  PageSectionTitle,
  RadioButtonList,
  StepperBackButton,
  UnchangePageTitle,
  Template,
} from "UI";
import {
  AccountConfirmPasswordData,
  AccountEmailData,
  AccountPasswordData,
  ContactPhoneNumberData,
  FirstNameData,
  LastNameData,
  EmailCommunicationAlterCheckboxData,
} from "Config";
import { SIGNIN_URL } from "Lib";
import useToast from "Lib/useToast";

interface SignInThirdPagePropsType {
  handlePrevPage: () => void;
  countryPhone: string;
  setCountryPhone: (countryPhone: string) => void;
  eCConfirm: string;
  setECConfirm: (eCConfirm: string) => void;
  confirm: boolean;
  onHandleConfirm: () => void;
  formValues: { [key: string]: string };
  onInputChange: (name: string, value: string) => void;
  handleSubmit: () => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
export const SignUpStepThird: React.FC<SignInThirdPagePropsType> = ({
  handlePrevPage,
  confirm,
  countryPhone,
  eCConfirm,
  setCountryPhone,
  setECConfirm,
  onHandleConfirm,
  formValues,
  onInputChange,
  handleSubmit,
  isLoading,
  setIsLoading,
}) => {
  const navigate = useNavigate();
  const { handleErrorMessage } = useToast();

  const goToSignIn = () => {
    navigate(SIGNIN_URL);
  };

  const SignInFinalPageAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValues.password !== formValues.confirm_password) {
      handleErrorMessage("These passwords do not match. Try again.");
    } else if (formValues.password.length < 8) {
      handleErrorMessage("Password must be longer than 8 characters");
    } else {
      handleSubmit();
    }
  };
  return (
    <Template isLoading={isLoading}>
      <form onSubmit={SignInFinalPageAction}>
        <div
          className="
        w-[1000px] max-lg:w-full px-5 xs:mt-[60px] mt-5
      xs:mb-[150px] mb-[100px]  mx-auto"
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
          <div className="mt-30 xs:w-[500px] w-full">
            <div className="mt-30">
              <PageSectionTitle title="Personal details" />
              <div className="mt-2.5 smallIntroText">
                Use official name - if individual, use full name.
              </div>
              <div className="mt-15 flex flex-col gap-15">
                <Input
                  data={FirstNameData}
                  name="first_name"
                  onChange={onInputChange}
                  value={formValues.first_name || ""}
                />
                <Input
                  data={LastNameData}
                  name="last_name"
                  onChange={onInputChange}
                  value={formValues.last_name || ""}
                />
                <DropdownInput
                  data={ContactPhoneNumberData}
                  country={countryPhone}
                  selectCountry={setCountryPhone}
                  name="phone_number"
                  onChange={onInputChange}
                  value={formValues.phone_number || ""}
                />
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Email address" />
              <div className="mt-2.5 smallIntroText">
                This will double up as your username.
              </div>
              <div className="mt-15">
                <Input
                  data={AccountEmailData}
                  name="email"
                  onChange={onInputChange}
                  value={formValues.email || ""}
                />
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Password" />
              <div className="mt-2.5 smallIntroText">
                Use one you’re comfortable sharing if multiple people are
                managing  your campaign.
              </div>
              <div className="mt-15 flex flex-col gap-2.5">
                <Input
                  data={AccountPasswordData}
                  name="password"
                  onChange={onInputChange}
                  value={formValues.password || ""}
                />
                <Input
                  data={AccountConfirmPasswordData}
                  name="confirm_password"
                  onChange={onInputChange}
                  value={formValues.confirm_password || ""}
                />
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Email communication" />
              <div className="mt-2.5 smallIntroText">
                Stay in the know on everything Football Funder via our emails.
              </div>
              <div className="mt-15">
                <div className="mt-2.5">
                  <RadioButtonList
                    options={EmailCommunicationAlterCheckboxData}
                    currentValue={eCConfirm}
                    onSelect={setECConfirm}
                    classes="flex flex-col gap-[15px]"
                    textStyle="darkIntroText"
                    checkboxStyle={true}
                  />
                </div>
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Confirmation" />
              <div className="mt-[15px]">
                <CheckBox
                  align="flex-row-reverse gap-[10px]"
                  checked={confirm}
                  label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
                  onSelect={onHandleConfirm}
                  value="checked"
                  textClass="introText"
                />
              </div>
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
                  text="Register"
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
