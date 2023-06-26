import React, { useState } from "react";

import { RadioButtonList } from "UI";
import { Modal } from "..";

import { DownloadFormatData } from "Config";

interface DownloadModalProps {
  isShowModal: () => void;
  menuTitle: string;
  menuContent: string;
  button1Name: string;
  button2Name: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isShowModal,
  button1Name,
  button2Name,
  menuContent,
  menuTitle,
}) => {
  const [downloadFormat, setDownloadFormat] = useState<string>("");

  return (
    <Modal>
      <div className="w-[330px] p-15 bg-white rounded-10 border-[1px] border-gray-300 shadow-sm shadow-gray-200">
        <div className="valueText">{menuTitle}</div>
        <div className="mt-2.5 w-[285px] darkIntroText">{menuContent}</div>
        <div className="mt-2.5">
          <RadioButtonList
            options={DownloadFormatData}
            currentValue={downloadFormat}
            onSelect={setDownloadFormat}
            classes="flex gap-30"
            textStyle="text-base"
            checkboxStyle={false}
          />
        </div>
        <div className="mt-30">
          <div className="flex gap-2.5">
            <button
              className="rounded-10 px-7 py-2.5 bg-green-10 valueText"
              onClick={isShowModal}
            >
              {button1Name}
            </button>
            <button
              className="rounded-10 px-7 py-2.5 bg-green-70 valueTextWhite"
              onClick={isShowModal}
            >
              {button2Name}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
