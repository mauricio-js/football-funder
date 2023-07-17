import React, { useContext } from "react";
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
import { SIGNIN_URL } from "Lib/urls";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";

interface SignInThirdPagePropsType {
  handlePrevPage: () => void;
  handleDoublePrevPage: () => void;
  handleSubmit: () => void;
}
export const SignUpStepThird: React.FC<SignInThirdPagePropsType> = ({
  handlePrevPage,
  handleDoublePrevPage,
  handleSubmit,
}) => {
  const navigate = useNavigate();
  const { showStatus } = useContext(StatusContext);
  const { formValues, selectedCheckbox, selectValue } =
    useContext(FormStepperContext)!;

  const goToSignIn = () => {
    navigate(SIGNIN_URL);
  };
  const SignInFinalPageAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValues.password !== formValues.confirm_password) {
      showStatus("These passwords do not match. Try again.", "error");
    } else if (formValues.password && formValues.password.length < 8) {
      showStatus("Password must be longer than 8 characters", "error");
    } else if (
      !selectedCheckbox.confirm ||
      selectedCheckbox.confirm.length === 0
    ) {
      showStatus(
        "You must confirm Football Funder’s Terms & Conditions and Fraud Policy",
        "error"
      );
    } else {
      handleSubmit();
    }
  };
  return (
    <form onSubmit={SignInFinalPageAction}>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 xs:mt-[60px] mt-5
      xs:mb-[150px] mb-[100px]  mx-auto"
      >
        <div className="mt-6">
          <StepperBackButton
            handleBackPage={
              selectValue.category === 2 ? handleDoublePrevPage : handlePrevPage
            }
          />
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
              <Input data={FirstNameData} name="first_name" />
              <Input data={LastNameData} name="last_name" />
              <DropdownInput
                data={ContactPhoneNumberData}
                name="phone_number"
              />
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle title="Email address" />
            <div className="mt-2.5 smallIntroText">
              This will double up as your username.
            </div>
            <div className="mt-15">
              <Input data={AccountEmailData} name="email" />
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle title="Password" />
            <div className="mt-2.5 smallIntroText">
              Use one you’re comfortable sharing if multiple people are
              managing  your campaign.
            </div>
            <div className="mt-15 flex flex-col gap-2.5">
              <Input data={AccountPasswordData} name="password" />
              <Input
                data={AccountConfirmPasswordData}
                name="confirm_password"
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
                  classes="flex flex-col gap-[15px]"
                  textStyle="darkIntroText"
                  checkboxStyle={true}
                  name="ecc_communication"
                />
              </div>
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle title="Confirmation" />
            <div className="mt-[15px]">
              <CheckBox
                align="flex-row-reverse gap-[10px]"
                label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
                value={1}
                textClass="introText"
                name="confirm"
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
  );
};
