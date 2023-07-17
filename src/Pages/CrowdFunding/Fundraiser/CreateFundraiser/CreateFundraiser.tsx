import React, { useContext, useState } from "react";
import {
  CreateFundraiserFinalPage,
  CreateFundraiserFirstStep,
  CreateFundraiserFivethStep,
  CreateFundraiserSecondStep,
  CreateFundraiserThirdStep,
  CreateFundraiserFourthStep,
  CreateFundraiserSixthStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { useMutation } from "react-query";
import { StatusContext } from "App/StatusProvider";
import { useAxios } from "Lib";
import { useSelector } from "react-redux";
import { FormStepperContext } from "App/FormStepperProvider";

// import { FormStepperContext } from "App/FormStepperProvider";

export const CreateFundraiser: React.FC = () => {
  // const { selectValue } = useContext(FormStepperContext)!;
  const axios = useAxios();
  const { showStatus } = useContext(StatusContext);
  const userInfo = useSelector((state: any) => state.user);
  const { descriptionList, amount } = useContext(FormStepperContext);

  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );

  const { mutate: fundraiserSignUp } = useMutation(
    (params: any) => axios.post("/fundraiser/create", params),
    {
      onSuccess: (data) => {
        showStatus("Your fundraiser has been succesfully created!");
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
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

  function handleNextPage() {
    if (currentStep === 4) {
    }
    if (currentStep === 6) {
      fundraiserSignUp({
        user_id: userInfo.id,
        title: descriptionList.title,
        description: descriptionList.description,
        amount: amount.amount,
        about: "",
        titleImgLink: "",
        titleImgName: "",
        pitchImgLink: "",
        pitchImgName: "",
        pitchVideoLink: "",
        pitchVideoName: "",
        overlayImgLink: "",
        overlayImgName: "",
        promote: true,
        reward_ids: [],
      });
    } else if (currentStep < pages.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleNextPartPage() {
    if (currentStep < pages.length - 3) {
      setCurrentStep(currentStep + 3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function handlePrevPage() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function handledDoublePrevPage() {
    if (currentStep > 2) {
      setCurrentStep(currentStep - 3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "CreateFundraiserFirstStep",
      component: (
        <CreateFundraiserFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateFundraiserSecondStep",
      component: (
        <CreateFundraiserSecondStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateFundraiserThirdStep",
      component: (
        <CreateFundraiserThirdStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handleNextPartPage={handleNextPartPage}
        />
      ),
    },
    {
      name: "CreateFundraiserFourthStep",
      component: (
        <CreateFundraiserFourthStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateFundraiserFivethStep",
      component: (
        <CreateFundraiserFivethStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateFundraiserSixthStep",
      component: (
        <CreateFundraiserSixthStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handleDoublePrevPage={handledDoublePrevPage}
        />
      ),
    },

    {
      name: "CreateFundraiserFinalPage",
      component: <CreateFundraiserFinalPage />,
    },
  ];

  return (
    <Template>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
