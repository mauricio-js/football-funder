import React, { useContext } from "react";
import {
  AddmoreBtn,
  Button,
  FileNameCoverInput,
  Input,
  PageSectionTitle,
  PageTitle,
  StepLabel,
  StepperBackButton,
  Textarea,
} from "UI";
import { AdsNumberData, VideoURLData } from "Config";
import { StepperActionPropsType } from "types";
import { Perks } from "UI";
import { FormStepperContext } from "App/FormStepperProvider";

interface Perk {
  title: string;
  description: string;
}

export const CreateAdsListingSecondStep: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const {
    clickCount,
    setClickCount,
    clickedComponents,
    setClickedComponnets,
    inputValue,
    textareaValue,
    perkArray,
    setPerkArray,
    handleInputValue,
    handleTextAreaValue,
  } = useContext(FormStepperContext);

  const handleAddmoreBtnClick = () => {
    const newperks: Perk = {
      title: textareaValue[clickCount-1] || "",
      description: inputValue[clickCount-1] || "",
    };
    setPerkArray([...perkArray, newperks]);
    setClickCount(clickCount + 1);
    setClickedComponnets([...clickedComponents, clickCount]);
    console.log(clickCount, clickedComponents, "textarea",textareaValue,"input value",inputValue,"perk array",perkArray);
  };
  return (
    <form onSubmit={handleNextPage}>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[100px] max-ns:mb-[60px] mx-auto"
      >
        <PageTitle title="Create your listing" />
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 5" title="Add Details" />
        </div>
        <div className="xs:w-[500px]">
          <div className="mt-30">
            <PageSectionTitle
              title="Description of advert"
              intro="Give a detailed description of your fundraiser."
            />
            <div className="mt-[15px] xs:w-[500px]">
              <Textarea
                height="ns:h-[350px] vs:h-[390px] "
                name="advert_description"
                showLeftCharacters={false}
                title="Description"
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                required={true}
              />
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle
              title="Number of adverts"
              intro="If there are multiple versions of the same advert - state how many."
            />
            <div className="mt-15">
              <div className="bg-gray-200 p-2.5 rounded-10 text-[12px] leading-5 text-gray-600">
                We charge a small fee per individual listing on the platform.
                The number of listings should match the number of adverts
                available so that our fee is fairly reflected. <br />
                <br /> If you are listing multiple advertising opportunities of
                the same description as this listing, type the amount below so
                that we can calculate the correct fee.
              </div>
            </div>
            <div className="mt-15">
              <Input
                data={AdsNumberData}
                name="ads_number"
                required={true}
                disabled={false}
              />
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle
              title="Title image"
              intro="Recommended size 300x300px - this will be the first image you see on your campaign and in all listings."
            />
            <div className="mt-[15px]">
              <div className="xs:w-[500px]">
                <FileNameCoverInput
                  name="ads_title_image"
                  uploadUrl="fundraiser"
                />
              </div>
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle
              title="Listing pitch image/video"
              intro="This will appear at the top of your fundraiser page. Select image or video - a video will really bring the listing to life."
            />
            <div className="mt-[15px]">
              <div className="flex gap-[10px]">
                <div className="w-1/2">
                  <Button
                    backgroundColor="bg-green-10"
                    textColor="text-black"
                    textSize="text-[14px] leading-5 font-semibold"
                    height="h-[54px]"
                    width="w-full"
                    text="Video"
                  />
                </div>
                <div className="w-1/2">
                  <FileNameCoverInput
                    name="ads_pitch_image"
                    uploadUrl="fundraiser"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[15px] xs:w-[500px] w-full">
              <Input
                data={VideoURLData}
                name="ads_video_url"
                required={true}
                disabled={false}
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                title="Add perks"
                intro="Give your advertisers something back for providing you with financial backing. The number of rewards you can offer is unlimited."
              />
              <div className="mt-15">
                <>
                  {clickedComponents.map((value, index) => (
                    <Perks
                      key={index}
                      number={value}
                      inputValue={inputValue[index] || ""}
                      setInputValue={handleInputValue}
                      textareaValue={textareaValue[index] || ""}
                      setTextareaValue={handleTextAreaValue}
                    />
                  ))}
                </>

                <div className="mt-5">
                  <button type="button" onClick={handleAddmoreBtnClick}>
                    <AddmoreBtn />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:mt-[100px] mt-[60px]">
          <div className="flex xs:justify-end">
            <div className="xs:w-[250px] w-full">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Continue"
                textColor="text-green-70"
                textSize="buttonText"
                // handleClick={handleNextPage}
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
