import React, { useState, useContext } from "react";
import {
  CreateAdsListingFinalPage,
  CreateAdsListingFirstStep,
  CreateAdsListingSecondStep,
  CreateAdsListingThirdStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { FormStepperContext } from "App/FormStepperProvider";
import { useSelector } from "react-redux";
import { useAxios } from "Lib";
import { StatusContext } from "App/StatusProvider";
import { useMutation } from "react-query";
import dayjs from "dayjs";

export const CreateAdsListing: React.FC = () => {
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
    title: descriptionList.ads_listing_title,
    amount: amount.ads_amount,
    vat_fee: selectValue.including_vat ? true : false,
    sPeriodDate: dayjs(dateList.start_period).format("YYYY-MM-DD"),
    lPeriodDate: dayjs(dateList.end_period).format("YYYY-MM-DD"),
    commencementDate: dayjs(dateList.commencement_date).format("YYYY-MM-DD"),
    description: descriptionList.advert_description,
    adsNumber: formValues.ads_number,
    titleImgLink: selectedImage.ads_title_image?.publicUrl,
    titleImgName: selectedImage.ads_title_image?.file?.name,
    pitchImgLink: selectedImage.ads_pitch_image?.publicUrl,
    pitchImgName: selectedImage.ads_pitch_image?.file?.name,
    pitchVideoLink: formValues.ads_video_url,
    // pitchVideoName: formValues.ads_video_url,
    promote: isClickedPromoteBtn,
    perks: perkArray,
  };
  const createAdvertising = useMutation(
    (params: any) => axios.post("/advertising/create", params),
    {
      onSuccess: (data) => {
        showStatus("Your advertising lisitng has been succesfully created!");
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      onError: (err: any) => {
        console.log(data);
        console.log(err);
        // if (err.errors) {
        //   window.scrollTo(0, 0);
        //   const responseError = err.errors;
        //   if (
        //     responseError[0].rule === "unique" &&
        //     responseError[0].field === "email"
        //   ) {
        //     showStatus("Username already exists", "error");
        //   } else showStatus(responseError[0].message, "error");
        // } else {
        //   showStatus(err.message, "error");
        // }
      },
    }
  );

  function handleNextPage() {
    if (currentStep === 2) {
      // console.log("date123123123", data);
      createAdvertising.mutate(data);
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
      name: "CreateAdsListingFirstStep",
      component: (
        <CreateAdsListingFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateAdsListingSecondStep",
      component: (
        <CreateAdsListingSecondStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateAdsListingThirdStep",
      component: (
        <CreateAdsListingThirdStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },

    {
      name: "OrganisationAdvertisingFinalPage",
      component: <CreateAdsListingFinalPage />,
    },
  ];

  return (
    <Template isLoading={createAdvertising.isLoading || isLoading}>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
