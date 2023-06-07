import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { AiOutlinePaperClip } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

interface FileInputProps {
  onChange: (file: File | null) => void;
  selectedImage: File | null;
  removeImage: () => void;
}

export const FileInput: React.FC<FileInputProps> = ({
  onChange,
  selectedImage,
  removeImage,
}) => {
  const [buttonName, setButtonName] = useState<string>("Upload image");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const seletedFile = fileList[0];
      onChange(seletedFile);
      setButtonName(seletedFile.name);
    } else {
      onChange(null);
    }
  };
  useEffect(() => {
    if (!selectedImage) {
      setButtonName("Upload image");
    }
  }, [selectedImage]);

  return (
    <div className="overflow-hidden relative w-full">
      <button
        className={classNames(
          "bg-white text-green-70  text-[14px] flex items-center",
          "leading-[20px] h-[54px] rounded-10 border-2 border-gray-200 font-semibold py-2 px-4 w-full",
          selectedImage ? "justify-start" : "justify-center"
        )}
      >
        {!selectedImage && (
          <div className="flex items-center gap-1">
            <div className="text-[16px] rotate-180">
              <AiOutlinePaperClip />
            </div>
            {buttonName}
          </div>
        )}
        {selectedImage && (
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-1">
              <div className="text-[16px] rotate-180">
                <AiOutlinePaperClip />
              </div>
              {buttonName}
            </div>
            <button className="text-red-600" onClick={removeImage}>
              <RiDeleteBin6Line />
            </button>
          </div>
        )}
      </button>
      {!selectedImage && (
        <input
          className="absolute top-0 cursor-pointer block h-[54px] w-full opacity-0"
          type="file"
          name="documents[]"
          accept="image/*"
          onChange={handleFileChange}
        />
      )}
    </div>
  );
};
