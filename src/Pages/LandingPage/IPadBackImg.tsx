import React from 'react';

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
            bg-green-20 rounded-20 p-[30px] mx-auto
            w-[390px] sm:w-[527px] max-ns:w-[330px] max-vs:w-[300px]
            h-[224px] sm:h-[261px] max-ns:h-[240px]
          "
          >
            <p className="w-full text-[21px] max-ns:text-[16px] font-semibold leading-[28px] text-white">
              {title}
            </p>
            <p className="w-full mt-[20px] max-ns:text-[12px] text-[14px] font-medium leading-5 text-green-10">
              {description1}
            </p>
            <p className="max-lg:hidden w-full mt-[20px] max-ns:text-[12px] text-[14px] font-medium leading-5 text-green-10">
              {description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPadBackImg;
