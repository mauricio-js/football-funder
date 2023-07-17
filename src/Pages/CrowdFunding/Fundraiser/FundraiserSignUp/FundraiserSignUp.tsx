import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useAxios } from "Lib";
import {
  FundraiserSignUpFirstStep,
  FundraiserSignUpSecondStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";
import { registerFormDataType } from "Pages/Auth/SingUp/types";
import { EMAILVERIFICATION_URL } from "Lib/urls";

export const FundraiserSignUp: React.FC = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const { selectValue, formValues } = useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);

  const data: registerFormDataType = {
    category_id: selectValue.fundraiser_category,
    org_name: formValues.org_name,
    org_address1: formValues.org_address1,
    org_address2: formValues.org_address2,
    org_phone_number: formValues.org_phone_number,
    org_city: formValues.org_city,
    org_country: formValues.org_country,
    org_post_code: formValues.org_post_code,
    address_line1: formValues.address_line1,
    address_line2: formValues.address_line2,
    city: formValues.city,
    post_code: formValues.postcode,
    country: formValues.country,
    phone_number: formValues.phone_number,
    first_name: formValues.first_name,
    last_name: formValues.last_name,
    email: formValues.email,
    password: formValues.password,
  };

  const fundraiserSignUp = useMutation(
    (params: registerFormDataType) => axios.post("/user/register", params),
    {
      onSuccess: (data) => {
        showStatus("Your account has been succesfully registered!");
        navigate(EMAILVERIFICATION_URL);
      },
      onError: (err: any) => {
        if (err.errors) {
          window.scrollTo(0, 0);
          const responseError = err.errors;
          if (
            responseError[0].rule === "unique" &&
            responseError[0].field === "email"
          ) {
            showStatus("Username already exists", "error");
          } else showStatus(responseError[0].message, "error");
        } else {
          showStatus(err.message, "error");
        }
      },
    }
  );

  function onClickSubmitBtn() {
    console.log(data);
    // fundraiserSignUp.mutate(data);
  }
  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );

  function handleNextPage() {
    if (currentStep < pages.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handlePrevPage() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "FundraiserSignUpFirstStep",
      component: <FundraiserSignUpFirstStep handleNextPage={handleNextPage} />,
    },

    {
      name: "FundraiserSignUpSecondStep",
      component: (
        <FundraiserSignUpSecondStep
          handleSubmit={onClickSubmitBtn}
          handlePrevPage={handlePrevPage}
        />
      ),
    },
  ];

  return (
    <Template isLoading={fundraiserSignUp.isLoading}>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
