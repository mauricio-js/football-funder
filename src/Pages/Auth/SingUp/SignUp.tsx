import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { SignUpStepFirst, SignUpStepSecond, SignUpStepThird } from "Pages";
import { GeneralStepper, Template } from "UI";
import { ContactPhoneNumberData } from "Config";
import { useAxios } from "Lib";
import { registerFormDataType } from "./types";
import { EMAILVERIFICATION_URL } from "Lib";
import { StatusContext } from "App/StatusProvider";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const axios = useAxios();

  const [categoryId, setCategoryId] = useState<number>(1);

  const [countryPhone, setCountryPhone] = useState<string>(
    ContactPhoneNumberData[0].country
  );

  const [eCConfirm, setECConfirm] = useState<number>();

  const [confirm, setConfirm] = useState<boolean>(false);

  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const { showStatus } = useContext(StatusContext);

  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const onHandleConfirm = () => {
    setConfirm(!confirm);
  };

  const data: registerFormDataType = {
    category_id: categoryId,
    organization: formValues.organization,
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

  // const getCategoryData = async () => {
  //   try {
  //     const response = await axios.get("/category");
  //     const { data: category_data } = response;
  //     console.log(category_data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getCategoryData();
  // });

  // useEffect(() => {
  //   sessionStorage.setItem("accountEmail", formValues.email);
  // }, [formValues.email]);

  const signUp = useMutation(
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

  function onClickRegisterBtn() {
    signUp.mutate(data);
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
          onInputChange={handleInputChange}
          handleSubmit={onClickRegisterBtn}
        />
      ),
    },
  ];
  return (
    <Template isLoading={signUp.isLoading}>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
