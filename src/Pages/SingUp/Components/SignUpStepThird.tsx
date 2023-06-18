import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckBox,
  DropdownInput,
  Input,
  PageSectionTitle,
  RadioButtonList,
  UnchangePageTitle,
} from "UI";
import {
  AccountConfirmPasswordData,
  AccountEmailData,
  AccountPasswordData,
  ContactPhoneNumber,
  FirstNameData,
  LastNameData,
  EmailCommunicationAlterCheckboxData,
} from "Config";
import { SIGNIN_URL } from "Lib";

export const SignUpStepThird: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstName, setFirstName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lastName, setLastName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [address, setAddresss] = useState<string>("");
  const [country, setCountry] = useState<string>(ContactPhoneNumber[0].country);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState<string>(
    ContactPhoneNumber[0].randomNumber
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountEmail, setAccountEmail] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountConfirmPassword, setAccountConfirmPassword] =
    useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountPassword, setAccountPassword] = useState<string>("");
  const [eConfirm, setECConfirm] = useState<string>("no");
  const [confirm, setConfirm] = useState<boolean>(false);

  const onHandleConfirm = () => {
    setConfirm(!confirm);
  };

  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate(SIGNIN_URL);
  };
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 sm:mt-[60px] mt-5
       sm:mb-[100px] mb-30 mx-auto"
    >
      <div className="mt-30 xs:w-[500px] w-full">
        <UnchangePageTitle
          title="Create your Football Funder account"
          introText="Already have an account?"
          linkText="Sign in"
          linkFunction={goToSignIn}
        />
        <div className="mt-30">
          <PageSectionTitle title="Personal details" />
          <div className="mt-2.5 smallIntroText">
            Use official name - if individual, use full name.
          </div>
          <div className="mt-15 flex flex-col gap-15">
            <Input
              data={FirstNameData}
              setValue={setFirstName}
              defaultValue=""
            />
            <Input data={LastNameData} setValue={setLastName} defaultValue="" />
            <DropdownInput
              country={country}
              phoneNumber={phoneNumber}
              selectCountry={setCountry}
              inputPhoneNumber={setPhoneNumber}
              placeholder={phoneNumberPlaceholder}
              setPlaceholder={setPhoneNumberPlaceholder}
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
              setValue={setAccountEmail}
              defaultValue=""
            />
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle title="Password" />
          <div className="mt-2.5 smallIntroText">
            Use one you’re comfortable sharing if multiple people are managing 
            your campaign.
          </div>
          <div className="mt-15 flex flex-col gap-2.5">
            <Input
              data={AccountPasswordData}
              setValue={setAccountPassword}
              defaultValue=""
            />
            <Input
              data={AccountConfirmPasswordData}
              setValue={setAccountConfirmPassword}
              defaultValue=""
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
                currentValue={eConfirm}
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
    </div>
  );
};
