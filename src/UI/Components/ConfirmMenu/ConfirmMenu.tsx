import React from "react";

interface ConfirmMenuProps {
  isShowModal: () => void;
}

export const ConfirmMenu: React.FC<ConfirmMenuProps> = ({ isShowModal }) => {
  return (
    <div className="p-15 bg-white rounded-10 border-[1px] border-gray-300 shadow-sm shadow-gray-200">
      <div className="valueText">Are you sure</div>
      <div className="mt-2.5 darkIntroText">
        The listing and all content you've created will be deleted.
      </div>
      <div className="mt-30">
        <div className="flex gap-2.5">
          <button
            className="rounded-10 px-7 py-2.5 bg-green-10 valueText"
            onClick={isShowModal}
          >
            Remove
          </button>
          <button
            className="rounded-10 px-7 py-2.5 bg-green-70 valueTextWhite"
            onClick={isShowModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
