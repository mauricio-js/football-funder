import React, { useState } from "react";
import {
  AddmoreBtn,
  Button,
  FileInput,
  Input,
  PageSectionTitle,
  PageTitle,
  StepLabel,
  Textarea,
} from "UI";
import { AdsNumberData, PerkTitleData, VideoURLData } from "Config";
import { AddDetailsStepPagePropsType } from "types";

export const AddDetailsPage: React.FC<AddDetailsStepPagePropsType> = ({
  stepNumber,
  addPerk,
  descriptionTitle,
  pitchImage,
  titleImage,
  isShowAdvertNum,
  isShowDesciptionPanel,
  pageTitle,
}) => {
  const [adsNumber, setAdsNumber] = useState<string>("");
  const [vieoUrl, setVideoUrl] = useState<string>("");
  const [perkTitle, setPerkTitle] = useState<string>("");
  const [selectedTitleImage, setSelectedTitleImage] = useState<File | null>(
    null
  );
  const [selectedPitchImage, setSelectedPitchImage] = useState<File | null>(
    null
  );
  const removeTitleImage = () => {
    setSelectedTitleImage(null);
  };
  const removePitchImage = () => {
    setSelectedPitchImage(null);
  };
  // console.log("selected title image", selectedTitleImage, selectedPitchImage);
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[60px] max-ns:mb-30 mx-auto"
    >
      <PageTitle title={pageTitle} />
      <div className="mt-30">
        <StepLabel number={stepNumber} title="Add Details" />
      </div>
      <div className="xs:w-[500px]">
        {isShowDesciptionPanel && (
          <div className="mt-30">
            <PageSectionTitle
              title={descriptionTitle}
              intro="Give a detailed description of your fundraiser."
            />
            <div className="mt-[15px] xs:w-[500px]">
              <Textarea
                height="ns:h-[350px] vs:h-[390px] "
                value={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem."
                }
                showLeftCharacters={false}
                title="Description"
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
              />
            </div>
          </div>
        )}
        {isShowAdvertNum && (
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
                setValue={setAdsNumber}
                defaultValue={adsNumber}
              />
            </div>
          </div>
        )}
        <div className="mt-30">
          <PageSectionTitle
            title={titleImage}
            intro="Recommended size 300x300px - this will be the first image you see on your campaign and in all listings."
          />
          <div className="mt-[15px]">
            <div className="xs:w-[500px]">
              <FileInput
                onChange={setSelectedTitleImage}
                selectedImage={selectedTitleImage}
                removeImage={removeTitleImage}
              />
            </div>
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle
            title={pitchImage}
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
                <FileInput
                  onChange={setSelectedPitchImage}
                  selectedImage={selectedPitchImage}
                  removeImage={removePitchImage}
                />
              </div>
            </div>
          </div>
          <div className="mt-[15px] xs:w-[500px] w-full">
            <Input
              data={VideoURLData}
              setValue={setVideoUrl}
              defaultValue={vieoUrl}
            />
          </div>
          {addPerk && (
            <div className="mt-30">
              <PageSectionTitle
                title="Add perks"
                intro="Give your advertisers something back for providing you with financial backing. The number of rewards you can offer is unlimited."
              />
              <div className="mt-15">
                <Input
                  data={PerkTitleData}
                  setValue={setPerkTitle}
                  defaultValue={perkTitle}
                />
                <div className="mt-2.5">
                  <Textarea
                    height="h-[150px] max-ns:h-[200px]"
                    value={
                      "Opportunity to run the half time Rising Stars lottery draw, present the cheque to the previous home game's winner(s) and have your brand announced over the PA system prior to and after the draw taking place."
                    }
                    limit={300}
                    showLeftCharacters={true}
                    title="Perk description"
                    titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                  />
                </div>
                <div className="mt-5">
                  {/* <div className="flex items-center generalSmallText text-gray-400 gap-2">
                    <MdOutlineAddCircleOutline />
                    Add more
                  </div> */}
                  <div>
                    <AddmoreBtn />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
