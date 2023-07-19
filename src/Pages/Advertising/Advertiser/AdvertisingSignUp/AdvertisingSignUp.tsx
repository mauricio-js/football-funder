import React, { useState, useContext } from "react";
import {
  AdvertisingSignUpFirstStep,
  AdvertisingSignUpSecondStep,
  IndivididualAdvertiserSignUpSecondStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { useAxios } from "Lib";
import { useNavigate } from "react-router-dom";
import { FormStepperContext } from "App/FormStepperProvider";
import { StatusContext } from "App/StatusProvider";
import { registerFormDataType } from "Pages/Auth/SingUp/types";
import { useMutation } from "react-query";
import { EMAILVERIFICATION_URL } from "Lib/urls";

export const AdvertisingSignUp: React.FC = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const { selectValue, formValues } = useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);

  const data: registerFormDataType = {
    category_id: selectValue.advertiser_category,
    org_name: formValues.org_name,
    org_address1: formValues.org_address_line1,
    org_address2: formValues.org_address_line2,
    org_phone_number: formValues.org_phone_number,
    org_city: formValues.org_city,
    org_country: formValues.org_country,
    org_post_code: formValues.org_post_code,
    address_line1: formValues.address_line1,
    address_line2: formValues.address_line2,
    city: formValues.city,
    post_code: formValues.post_code,
    country: formValues.country,
    phone_number: formValues.phone_number,
    first_name: formValues.first_name,
    last_name: formValues.last_name,
    email: formValues.email,
    password: formValues.password,
    profile_url: formValues.profile_url,
  };

  const advertiserSignUp = useMutation(
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
    advertiserSignUp.mutate(data);
    // console.log("params", data);
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
      name: "AdvertisingSignUpFirstStep",
      component: (
        <AdvertisingSignUpFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    ...[
      selectValue.advertiser_category === 2
        ? {
            name: "IndivididualAdvertiserSignUpSecondStep",
            component: (
              <IndivididualAdvertiserSignUpSecondStep
                handlePrevPage={handlePrevPage}
                handleSubmit={onClickSubmitBtn}
              />
            ),
          }
        : {
            name: "AdvertisingSignUpSecondStep",
            component: (
              <AdvertisingSignUpSecondStep
                handlePrevPage={handlePrevPage}
                handleSubmit={onClickSubmitBtn}
              />
            ),
          },
    ],
  ];

  return (
    <Template>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
