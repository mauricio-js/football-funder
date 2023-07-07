import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpStepFirst, SignUpStepSecond, SignUpStepThird } from "Pages";
import { GeneralStepper, Template } from "UI";
import { ContactPhoneNumberData } from "Config";
import { useAxios, useIsMounted } from "Lib";
import { registerFormDataType } from "./types";
import { EMAILVERIFICATION_URL } from "Lib";
import useToast from "Lib/useToast";

const country = ["england", "scotland", "wales", "nothern ireland"];

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { handleErrorMessage } = useToast();

  const { setSafely } = useIsMounted();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categoryId, setCategoryId] = useState<number>(1);

  const [countryIndex, setCountryIndex] = useState<string>("");

  const [countryPhone, setCountryPhone] = useState<string>(
    ContactPhoneNumberData[0].country
  );

  const [eCConfirm, setECConfirm] = useState<string>("no");

  const [confirm, setConfirm] = useState<boolean>(false);

  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  useEffect(() => {
    sessionStorage.setItem("accountEmail", formValues.email);
  }, [formValues.email]);

  const onHandleConfirm = () => {
    setConfirm(!confirm);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryIndex(event.target.value);
  };

  const data: registerFormDataType = {
    category_id: categoryId,
    organization: formValues.organization,
    address_line1: formValues.address_line1,
    address_line2: formValues.address_line2,
    city: formValues.city,
    post_code: formValues.postcode,
    country: country[parseInt(countryIndex) - 1],
    phone_number: formValues.phone_number,
    first_name: formValues.first_name,
    last_name: formValues.last_name,
    email: formValues.email,
    password: formValues.password,
  };

  const axios = useAxios();

  const onClickRegisterBtn = () => {
    setSafely(setIsLoading, true);
    axios
      .post(`/user/register`, data)
      .then((res) => {
        setSafely(setIsLoading, false);
        navigate(EMAILVERIFICATION_URL);
      })
      .catch((err) => {
        if (err.errors) {
          window.scrollTo(0, 0);
          const responseError = err.errors;
          handleErrorMessage(responseError[0].message);
        } else {
          console.log(err.message);
          handleErrorMessage(err.message);
        }
        setSafely(setIsLoading, false);
      });
  };
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
      name: "SignUpStepFirst",
      component: (
        <SignUpStepFirst
          handleNextPage={handleNextPage}
          setCategoryId={setCategoryId}
          categoryId={categoryId}
        />
      ),
    },
    {
      name: "SignUpStepSecond",
      component: (
        <SignUpStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          country={countryIndex}
          handleSelectChange={handleSelectChange}
          formValues={formValues}
          onInputChange={handleInputChange}
        />
      ),
    },
    {
      name: "SignUpStepThird",
      component: (
        <SignUpStepThird
          handlePrevPage={handlePrevPage}
          countryPhone={countryPhone}
          setCountryPhone={setCountryPhone}
          eCConfirm={eCConfirm}
          setECConfirm={setECConfirm}
          confirm={confirm}
          onHandleConfirm={onHandleConfirm}
          formValues={formValues}
          onInputChange={handleInputChange}
          handleSubmit={onClickRegisterBtn}
        />
      ),
    },
  ];
  return (
    <Template isLoading={isLoading}>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
