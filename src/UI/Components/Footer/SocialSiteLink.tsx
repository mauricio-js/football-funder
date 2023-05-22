import React from "react";
import FacebookIcon from "Assets/images/svg/icon-facebook";
import InstagramIcon from "Assets/images/svg/icon-instagram";
import LinkdedinIcon from "Assets/images/svg/icon-linkedin";
import TwitterIcon from "Assets/images/svg/icon-twitter";
import YoutubeIcon from "Assets/images/svg/icons-youtube";

interface SocialLinkType {
  handleClick: () => void;
  Icon: React.FC;
}

const socialLink: SocialLinkType[] = [
  {
    handleClick: () => console.log("Clicked Facebook"),
    Icon: FacebookIcon,
  },
  {
    handleClick: () => console.log("Clicked Instargram"),
    Icon: InstagramIcon,
  },
  {
    handleClick: () => console.log("Clicked Twitter"),
    Icon: TwitterIcon,
  },
  {
    handleClick: () => console.log("Clicked Linkedin"),
    Icon: LinkdedinIcon,
  },
  {
    handleClick: () => console.log("Clicked YouTube"),
    Icon: YoutubeIcon,
  },
];

const SocialSiteLink: React.FC = () => {
  return (
    <div className={`flex flex-row gap-6 text-green-10 text-2xl`}>
      {socialLink.map((Social, index) => (
        <div key={index} onClick={Social.handleClick}>
          <Social.Icon />
        </div>
      ))}
    </div>
  );
};

export default SocialSiteLink;
