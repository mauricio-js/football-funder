import React from 'react';

interface IPadBack {
  imageSrc: string;
  title: string;
  description: string;
}

interface Props {
  ipadBack: IPadBack;
}

const IPadBackImg: React.FC<Props> = ({ ipadBack }) => {
  const { imageSrc, title, description } = ipadBack;

  return (
    <div className="text-[14px] font-medium leading-[25px] text-white h-[682px] ">
      <div
        className=" relative bg-contain bg-no-repeat bg-center h-[531px] mx-auto"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className="absolute top-[421px] w-full">
          <div
            className="
            bg-green-20 rounded-20 p-[30px] mx-auto
            w-[390px] sm:w-[527px] max-ns:w-[330px] max-vs:w-[300px]
            h-[224px] sm:h-[261px] max-ns:h-[260px]
          "
          >
            <p className="w-full text-[21px] max-ns:text-[16px] font-semibold leading-[28px] text-white">
              {title}
            </p>
            <p className="w-full mt-[20px] max-ns:text-[12px] text-[14px] font-medium leading-5 text-green-10">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPadBackImg;
