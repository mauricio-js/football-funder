import React from "react";
import { LivePageStep1 } from "UI";
import { LivePagePropsType } from "types";

export const SponsorshipSaleStep1: React.FC<LivePagePropsType> = ({
  handleNextPage,
  handlePrevPage,
  introTitle,
  pageTitle,
}) => {
  return (
    <div>
      <LivePageStep1
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        introTitle={introTitle}
        pageTitle={pageTitle}
      />
    </div>
  );
};
