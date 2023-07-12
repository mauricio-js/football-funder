import React from "react";
import {
  Button,
  FileNameCoverInput,
  Input,
  PageSectionTitle,
  PageTitle,
  StepLabel,
  StepperBackButton,
  Textarea,
} from "UI";
import { VideoURLData } from "Config";
import { StepperActionPropsType } from "types";

export const OrganisationFundraiserStepThird: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNextPage();
  };
  return (
    <form onSubmit={handleClick}>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[100px] max-ns:mb-[60px] mx-auto"
      >
        <PageTitle title="Create your fundraiser" />
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 3" title="Add Details" />
        </div>
        <div className="xs:w-[500px]">
          <div className="mt-30">
            <PageSectionTitle
              title="About the fundraiser"
              intro="Give a detailed description of your fundraiser."
            />
            <div className="mt-[15px] xs:w-[500px]">
              <Textarea
                name="description"
                height="ns:h-[350px] vs:h-[390px] "
                showLeftCharacters={false}
                title="Description"
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
              />
            </div>
          </div>

          <div className="mt-30">
            <PageSectionTitle
              title="Fundraiser title image"
              intro="Recommended size 300x300px - this will be the first image you see on your campaign and in all listings."
            />
            <div className="mt-[15px]">
              <div className="xs:w-[500px]">
                <FileNameCoverInput name="title_image" />
              </div>
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle
              title="Fundraiser pitch image/video"
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
                  <FileNameCoverInput name="pitch_image" />
                </div>
              </div>
            </div>
            <div className="mt-[15px] xs:w-[500px] w-full">
              <Input data={VideoURLData} name="video_url" />
            </div>
          </div>
        </div>
        <div className="xs:mt-[100px] mt-[60px]">
          <div className="flex xs:justify-end">
            <div className="xs:w-[250px] w-full">
              <Button
                type="submit"
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Continue"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
