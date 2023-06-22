import React from "react";
import { LivePageStep2 } from "UI";
import { LivePagePropsType } from "types";

export const AdvertisingSaleStep2: React.FC<LivePagePropsType> = ({
  handleNextPage,
  handlePrevPage,
  introTitle,
  pageTitle,
}) => {
  return (
    <div>
      <LivePageStep2
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        introTitle={introTitle}
        pageTitle={pageTitle}
      />
    </div>
  );
};
