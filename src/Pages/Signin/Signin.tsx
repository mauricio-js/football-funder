import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FORGOTPASSWORD_URL, SIGNUP_URL, SIGNIN_URL } from "Lib";
import { Button, Input, TextButton, Template } from "UI";
import { AccountEmailData, AccountPasswordData } from "Config";

export const SigninPage: React.FC = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountEmail, setAccountEmail] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountPassword, setAccountPassword] = useState<string>("");

  const goToSignIn = () => {
    navigate(SIGNIN_URL);
  };
  const goToSignUp = () => {
    navigate(SIGNUP_URL);
  };
  const goToForgotPasswordPage = () => {
    navigate(FORGOTPASSWORD_URL);
  };
  return (
    <Template>
      <div className=" w-[1000px] max-lg:w-full px-5 mb-[300px] max-md:mb-[150px] mx-auto sm:mt-[60px] mt-[90px]">
        <div className=" xs:w-[500px]">
          <div className="generalTitle">Welcome back</div>
          <div className="mt-15 flex gap-1">
            <div className="introText">New to Football Funder?</div>
            <TextButton text="Sign Up" handleClick={goToSignUp} />
          </div>
          <div className="mt-30">
            <Input
              data={AccountEmailData}
              setValue={setAccountEmail}
              defaultValue=""
            />
            <div className="mt-2.5">
              <Input
                data={AccountPasswordData}
                setValue={setAccountPassword}
                defaultValue=""
              />
            </div>
          </div>
          <div className="mt-30">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Sign in"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={goToSignIn}
            />
          </div>
          <div className="mt-30">
            <TextButton
              text="I forgot my password"
              handleClick={goToForgotPasswordPage}
            />
          </div>
        </div>
      </div>
    </Template>
  );
};
