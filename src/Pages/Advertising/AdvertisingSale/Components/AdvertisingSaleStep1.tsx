import React from "react";
import { LivePageStep1 } from "UI";
import { LivePagePropsType } from "types";

export const AdvertisingSaleStep1: React.FC<LivePagePropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <div>
      <LivePageStep1
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        introTitle="Pitchside advertising board 1220x610cm"
        pageTitle="Advertising enquiry"
      />
    </div>
  );
};
