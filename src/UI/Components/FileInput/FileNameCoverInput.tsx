import React, { useContext } from "react";
import { useAxios } from "Lib";
import { FormStepperContext } from "App/FormStepperProvider";
import classNames from "classnames";
import { AiOutlinePaperClip } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

interface FileInputProps {
  name: any;
  imageName: any;
  setValue: (key: string, value: any) => void;
}

export const FileNameCoverInput: React.FC<FileInputProps> = ({
  name,
  imageName,
  setValue,
}) => {
  const axios = useAxios();
  const { setIsLoading } = useContext(FormStepperContext);
  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const seletedFile = fileList[0];
      let formData = new FormData();
      formData.append("file", seletedFile);
      try {
        setIsLoading(true);
        const response = await axios.post(
          `v1/file/fundraiser/file_upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setIsLoading(false);
        setValue(`${name}Link`, response.data);
        setValue(`${name}Name`, seletedFile.name);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const removeImage = () => {
    setValue(`${name}Link`, "");
    setValue(`${name}Name`, "");
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className={classNames(
          "bg-white text-green-70  text-[14px] flex items-center",
          "leading-[20px] h-[54px] rounded-10 border-2 border-gray-200 font-semibold py-2 px-4 w-full",
          imageName ? "justify-start" : "justify-center"
        )}
      >
        {!imageName && (
          <div className="flex items-center gap-1">
            <div className="text-[16px] rotate-180">
              <AiOutlinePaperClip />
            </div>
            Upload image
          </div>
        )}
        {imageName && (
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-1">
              <div className="text-[16px] rotate-180">
                <AiOutlinePaperClip />
              </div>
              {imageName}
            </div>
            <div className="text-red-600" onClick={removeImage}>
              <RiDeleteBin6Line />
            </div>
          </div>
        )}
      </div>
      {!imageName && (
        <input
          className="absolute top-0 cursor-pointer block h-[54px] w-full opacity-0"
          type="file"
          name="documents[]"
          accept="image/*"
          onChange={handleFileChange}
          required={true}
        />
      )}
    </div>
  );
};
