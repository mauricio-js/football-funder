import React from 'react';

interface SocialLinkProps {
  handleClick: () => void;
  icon: React.FC;
}

interface Props {
  socialLink: SocialLinkProps[];
  className?: string;
}

const SocialSiteLink: React.FC<Props> = ({ socialLink, className }) => {
  return (
    <div className={`flex flex-row gap-4 text-green-10 text-2xl ${className}`}>
      {socialLink.map(({ handleClick, icon: Icon }, index) => (
        <div key={index} onClick={handleClick}>
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default SocialSiteLink;
