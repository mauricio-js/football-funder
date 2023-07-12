import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AccountConfirmPasswordData, AccountPasswordData } from "Config";
import { useMutation } from "react-query";
import { Button, Input, Template } from "UI";
import { useAxios, SIGNIN_URL, FORGOTPASSWORD_URL } from "Lib";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";

interface ResetPasswordType {
  token: string | undefined;
  password: string;
  password_confirmation: string;
}
export const ResetPassword: React.FC = () => {
  const params = useParams<string>();
  const navigate = useNavigate();
  const { showStatus } = useContext(StatusContext);
  const { formValues } = useContext(FormStepperContext)!;
  const axios = useAxios();

  const resetPassword = useMutation(
    (parms: ResetPasswordType) => axios.post("/auth/reset_password", parms),
    {
      onSuccess: () => {
        showStatus("Your password has been succesfully created!");
        navigate(SIGNIN_URL);
      },
      onError: (err: any) => {
        if (err.errors) {
          const responseError = err.errors;
          if (
            responseError[0].message ===
            "A password must be at least 8 characters"
          )
            showStatus(responseError[0].message, "error");
          else showStatus("You must match the password! ", "error");
        } else {
          const error = err.response?.data?.error ?? "";
          if (error === "no-password-reset") {
            showStatus(
              "The password has not been updated. Please try again!",
              "error"
            );
            navigate(FORGOTPASSWORD_URL);
          } else {
            showStatus("The reset password token is invalid!", "error");
            navigate(FORGOTPASSWORD_URL);
          }
        }
      },
    }
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = {
      token: params?.token,
      password: formValues.password,
      password_confirmation: formValues.password_confirmation,
    };
    // console.log("formdata", formData);
    resetPassword.mutate(formData);
  }

  return (
    <Template title="Resct Password" isLoading={resetPassword.isLoading}>
      <form onSubmit={handleSubmit}>
        <div
          className="
        md:w-[720px] w-full px-5 ns:mt-[90px] mt-[60px] ns:mb-[500px] mb-[300px]  mx-auto"
        >
          <div className="mt-30  xs:text-center generalTitle">
            Add new password
          </div>
          <div className="mt-15  xs:text-center introText">
            Enter your new password.
          </div>
          <div className="mt-30 xs:w-[500px] mx-auto w-full flex justify-center flex-col gap-2.5">
            <Input data={AccountPasswordData} name="password" />
            <Input
              data={AccountConfirmPasswordData}
              name="password_confirmation"
            />
          </div>
          <div className="mt-30 w-full flex justify-center">
            <div className="xs:w-[500px] w-full">
              <Button
                type="submit"
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Create new password"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          </div>
        </div>
      </form>
    </Template>
  );
};
