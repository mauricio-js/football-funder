import React from 'react';

interface GuideItems {
  handleClick: () => void;
  label: string;
}

interface Props {
  guideItems: GuideItems[];
}

const SocialSiteLink: React.FC<Props> = ({ guideItems }) => {
  return (
    <div className="text-[14px] font-medium leading-[25px] text-white ">
      {guideItems.map((item, index) => (
        <div key={index} onClick={item.handleClick}>
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default SocialSiteLink;
