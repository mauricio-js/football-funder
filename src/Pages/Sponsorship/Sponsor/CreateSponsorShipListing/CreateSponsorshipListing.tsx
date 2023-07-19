import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import {
  CreateSponsorshipLisingFinalStep,
  CreateSponsorshipListingFirstStep,
  CreateSponsorshipListingSecondStep,
  CreateSponsorshipListingThirdStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { useAxios } from "Lib";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";
import { useMutation } from "react-query";
import dayjs from "dayjs";

export const CreateSponsorshipListing: React.FC = () => {
  const axios = useAxios();
  const { showStatus } = useContext(StatusContext);
  const { userInfo } = useSelector((state: any) => state.user);
  const {
    selectValue,
    dateList,
    descriptionList,
    amount,
    selectedImage,
    formValues,
    isClickedPromoteBtn,
    isLoading,
    perkArray,
  } = useContext(FormStepperContext);
  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );

  const data: any = {
    user_id: userInfo.id,
    title: descriptionList.sponsorship_listing_title,
    amount: amount.sponsorship_amount,
    vat_fee: selectValue.including_vat ? true : false,
    sPeriodDate: dayjs(dateList.start_period).format("YYYY-MM-DD"),
    lPeriodDate: dayjs(dateList.end_period).format("YYYY-MM-DD"),
    commencementDate: dayjs(dateList.commencement_date).format("YYYY-MM-DD"),
    description: descriptionList.sponsorship_description,
    adsNumber: 123,
    titleImgLink: selectedImage.sponsorship_title_image?.publicUrl,
    titleImgName: selectedImage.sponsorship_title_image?.file?.name,
    pitchImgLink: selectedImage.sponsorship_pitch_image?.publicUrl,
    pitchImgName: selectedImage.sponsorship_pitch_image?.file?.name,
    pitchVideoLink: formValues.sponsorship_video_url,
    // pitchVideoName: formValues.ads_video_url,
    promote: isClickedPromoteBtn,
    perks: perkArray,
  };
  const createSponsorship = useMutation(
    (params: any) => axios.post("/sponsorship/create", params),
    {
      onSuccess: (data) => {
        showStatus("Your sponsorship lisitng has been succesfully created!");
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      onError: (err: any) => {
        console.log(data);
        console.log(err);
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
          if (err.response.data.error === "failed-to-create-sponsorship")
            showStatus("You are failed to create sponsorhip list", "error");
        }
      },
    }
  );

  function handleNextPage() {
    if (currentStep === 2) {
      // console.log("date123123123", data);
      createSponsorship.mutate(data);
    } else if (currentStep < pages.length - 1) {
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
      name: "CreateSponsorshipListingFirstStep",
      component: (
        <CreateSponsorshipListingFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateSponsorshipListingSecondStep",
      component: (
        <CreateSponsorshipListingSecondStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateSponsorshipListingThirdStep",
      component: (
        <CreateSponsorshipListingThirdStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },

    {
      name: "CreateSponsorshipLisingFinalStep",
      component: <CreateSponsorshipLisingFinalStep />,
    },
  ];

  return (
    <Template isLoading={createSponsorship.isLoading || isLoading}>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
