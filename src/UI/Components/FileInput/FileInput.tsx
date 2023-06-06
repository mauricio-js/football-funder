import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";

export const FileInput: React.FC = () => {
  return (
    <div className="overflow-hidden relative w-full">
      <button className="bg-white text-green-70  text-[14px] flex justify-center items-center leading-[20px] h-[54px] rounded-10 border-2 border-gray-300 font-semibold py-2 px-4 w-full">
        <div className="flex items-center gap-1">
          <div className="text-[16px] rotate-180">
            <AiOutlinePaperClip />
          </div>
          Upload Document
        </div>
      </button>
      <input
        className="absolute top-0 cursor-pointer block h-[54px] w-full opacity-0"
        type="file"
        name="documents[]"
        accept="image/*"
      />
    </div>
  );
};
