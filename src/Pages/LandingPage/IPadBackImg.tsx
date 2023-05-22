import React from "react";

interface IPadBack {
  imageSrc: string;
  title: string;
  description1: string;
  description2: string;
}

interface Props {
  ipadBack: IPadBack;
}

const IPadBackImg: React.FC<Props> = ({ ipadBack }) => {
  const { imageSrc, title, description1, description2 } = ipadBack;

  return (
    <div className="text-[14px] font-medium leading-[25px] text-white h-[682px] ">
      <div
        className=" relative bg-contain bg-no-repeat bg-center h-[531px] mx-auto z-0"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className="absolute top-[421px] w-full">
          <div
            className="
            bg-green-20 rounded-20 mx-auto p-[30px]
            sm:w-[527px] ns:w-[390px] max-ns:w-full
           "
          >
            <p className="w-full text-[21px] max-vs:text-[16px] max-vs:leading-5 font-semibold leading-[28px] text-white">
              {title}
            </p>
            <p className="w-full mt-[20px] text-[14px] max-vs:text-[12px] max-vs:leading-4 font-medium leading-5 text-green-10">
              {description1}
            </p>
            <p className="max-sm:hidden w-full mt-[20px] max-ns:text-[12px] text-[14px] font-medium leading-5 text-green-10">
              {description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPadBackImg;
